import { useState } from 'react';
import cn from 'classnames';
import { formatDate } from '@lib/notion';

const BlogSection = ({ isPartial, source }) => {
  const [query, setQuery] = useState('');

  const posts = source.filter(({ title, summary, tags }) => {
    const searchString = `${title.toLowerCase()} ${summary.toLowerCase()} ${tags?.join(
      ' '
    )}`;
    return searchString.includes(query.toLowerCase());
  });

  const filteredPosts = isPartial ? source.slice(0, 6) : posts;

  return (
    <section
      className={cn(
        'max-w-3xl mx-auto px-4 sm:px-6 xl:px-8',
        isPartial ? null : 'pt-4 pb-24 lg:pb-16'
      )}>
      {isPartial ? null : (
        <div className='relative w-full mb-8'>
          <svg
            width='20'
            height='20'
            fill='currentColor'
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            />
          </svg>
          <input
            className='block w-full py-2 pl-10 border-2 rounded-md border-gray-900 text-gray-900 leading-5 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none'
            aria-label='Search articles'
            type='text'
            placeholder='Search articles'
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      )}
      <ul className='space-y-4'>
        {filteredPosts.length === 0 ? (
          <p className='text-lg text-center text-gray-200'>🧐 No posts found</p>
        ) : (
          filteredPosts?.map((post) => (
            <li key={post.id}>
              <a href={`/blog/${post.slug}`} aria-label={post.title}>
                <div className='flex flex-col p-4 mb-4 bg-gray-700 hover:bg-gray-600 shadow-md rounded transition-colors duration-300'>
                  {/* <div className="m-0 inline-block overflow-hidden max-w-full box-border relative"></div> */}
                  {/* <Img className=""/> */}

                  <div className='flex flex-wrap space-x-2'>
                    {post.tags.map((tag) => (
                      <p
                        key={tag}
                        className='mb-2 px-3 py-0.5 w-max text-xs font-medium leading-relaxed text-gray-200 bg-gray-500 bg-opacity-20 rounded-full'>
                        {tag}
                      </p>
                    ))}
                  </div>
                  <h4 className='mb-1 text-gray-50 text-lg md:text-xl font-medium'>
                    {post.title}
                  </h4>
                  <p className='text-gray-400 text-sm md:text-base'>
                    {post.summary}
                  </p>
                  <div className='flex justify-between pt-3'>
                    <p className='text-sm text-gray-200 tracking-wide'>
                      {formatDate(post.publishedAt)}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default BlogSection;
