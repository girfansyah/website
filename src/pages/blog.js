import { NextSeo } from 'next-seo';
import MainLayout from '@components/MainLayout';
import HeroSection from '@components/HeroSection';
import { heroBlog } from '@lib/constants';

export default function Blog() {
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
    </MainLayout>
  );
}
