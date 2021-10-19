import { NotionRenderer } from 'react-notion';
import BlogHeader from '@components/BlogHeader';
import MainLayout from '@components/MainLayout';
import { getDatabase, getPost } from '@lib/notion';

export default function Post({ page, post, pagination, related }) {
  const { slug, title, summary, image, Author, tags, publishedAt } = post;

  return (
    <MainLayout>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16'>
        <BlogHeader
          title={title}
          summary={summary}
          image={image}
          tags={tags}
          Author={Author}
          publishedAt={publishedAt}
        />
        <div className='notion prose max-w-none w-full'>
          <NotionRenderer blockMap={page} />
        </div>
      </article>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const database = await getDatabase();

  const tablePost = database
    .filter(({ status }) => status == 'Published')
    .filter(({ type }) => type === 'Article')
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  const paths = tablePost.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const database = await getDatabase();

  const posts = database
    .filter(({ status }) => status == 'Published')
    .filter(({ type }) => type === 'Article')
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  const related = posts
    .filter((meta) => meta.slug !== params.slug)
    // find other posts where tags are matching
    .filter((meta) => meta.tags?.some((tag) => posts.tags?.includes(tag)))
    .map((x) => ({ meta: x }))
    .filter((_, i) => i < 3);

  const postIndex = database.findIndex((p) => p.slug === params.slug);
  const post = posts[postIndex];
  const page = await getPost(post.id);

  const pagination = {
    prev: postIndex - 1 >= 0 ? posts[postIndex - 1] : null,
    next: postIndex + 1 < posts.length ? posts[postIndex + 1] : null,
  };

  return {
    props: {
      page,
      post,
      pagination,
      related,
    },
    revalidate: 30,
  };
}
