import { NextSeo } from 'next-seo';
import MainLayout from '@components/MainLayout';
import HeroSection from '@components/HeroSection';
import { heroSnippets } from '@lib/constants';

export default function Snippets() {
  const seoTitle = `${heroSnippets.title} - Gilang Irfansyah`;

  return (
    <MainLayout>
      <NextSeo
        title={seoTitle}
        description={heroSnippets.content}
        openGraph={{
          title: seoTitle,
          url: `https://girfansyah.site/snippets`,
          description: heroSnippets.content,
          site_name: 'Gilang Irfansyah',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <HeroSection title={heroSnippets.title} content={heroSnippets.content} />
    </MainLayout>
  );
}
