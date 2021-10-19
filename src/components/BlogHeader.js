import { Fragment } from 'react';
import Img from 'next/image';
import { formatDate } from '@lib/notion';

const BlogHeader = ({ title, summary, tags, image, Author, publishedAt }) => {
  return (
    <header>
      <div>
        <h1 className='text-2xl md:text-3xl font-bold mb-2'>{title}</h1>
        <p className='mb-2 text-gray-400'>{summary}</p>
        <div className='flex items-center space-x-2 mb-2'>
          {tags.map((tag) => (
            <p key={tag} className={`text-xs p-1 rounded ${tag}`}>
              #{tag}
            </p>
          ))}
        </div>
        <div className='flex items-center space-x-3 text-sm leading-relaxed text-gray-300'>
          {Author.map((author) => (
            <Fragment key={author}>
              <Img
                src={author.profilePhoto}
                alt='profile'
                layout='fixed'
                height='34'
                width='34'
              />
              <span>{author.fullName}</span>
            </Fragment>
          ))}
          <span>/</span>
          <time>{formatDate(publishedAt)}</time>
        </div>
        {image && (
          <div className='mt-8'>
            <Img
              src={image}
              alt={title}
              width={1920}
              height={768}
              objectFit='cover'
              className='rounded md:rounded-md transform hover:scale-105 transition-all duration-300'
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default BlogHeader;
