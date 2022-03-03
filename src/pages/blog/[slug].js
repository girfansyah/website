import { NextSeo } from 'next-seo';
import { NotionRenderer } from 'react-notion';
import BlogHeader from '@components/BlogHeader';
import MainLayout from '@components/MainLayout';
import { getDatabase, getPost } from '@lib/notion';

export default function Post({ page, post }) {
  const { slug, title, summary, image, Author, tags, publishedAt } = post;

  const seoTitle = `${title} - Gilang Irfansyah`;
  const seoUrl = `https://girfansyah.site/blog/${slug}`;

  return (
    <MainLayout>
      <NextSeo
        title={seoTitle}
        description={summary}
        canonical={seoUrl}
        openGraph={{
          title: seoTitle,
          url: seoUrl,
          description: summary,
          images: [
            {
              url: 'https://girfansyah.site/static/images/banner.png',
              alt: seoTitle,
            },
          ],
          site_name: 'Gilang Irfansyah',
          type: 'article',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
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

  const postIndex = database.findIndex((p) => p.slug === params.slug);
  const post = posts[postIndex];
  const page = await getPost(post.id);

  return {
    props: {
      page,
      post,
    },
    revalidate: 30,
  };
}
