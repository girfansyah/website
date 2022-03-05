import { NextSeo } from 'next-seo';
import MainLayout from '@components/MainLayout';
import HeroSection from '@components/HeroSection';
import { heroSnippets } from '@lib/constants';

export default function Snippets() {
  const seoTitle = `${heroSnippets.title} - Gilang Irfansyah`;
  const url = "https://girfansyah.site/snippets"

  return (
    <MainLayout>
      <NextSeo
        title={seoTitle}
        description={heroSnippets.content}
        canonical={url}
        openGraph={{
          title: seoTitle,
          url: url,
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
