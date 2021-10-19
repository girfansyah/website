import { NextSeo } from 'next-seo';
import MainLayout from '@components/MainLayout';
import HeroSection from '@components/HeroSection';
import { heroBlog } from '@lib/constants';
import BlogSection from '@components/BlogSection';
import { getDatabase } from '@lib/notion';

export default function Blog({ posts }) {
  const seoTitle = `${heroBlog.title} - Gilang Irfansyah`;
  return (
    <MainLayout>
      <NextSeo
        title={seoTitle}
        description={heroBlog.content}
        openGraph={{
          title: seoTitle,
          url: `https://girfansyah.vercel.app/blog`,
          description: heroBlog.content,
          site_name: 'Gilang Irfansyah',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <HeroSection title={heroBlog.title} content={heroBlog.content} />
      <BlogSection source={posts} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const database = await getDatabase();

  const posts = database
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(({ status }) => status == 'Published')
    .filter(({ type }) => type === 'Article');

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
