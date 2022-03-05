import { NextSeo } from 'next-seo';
import AboutSection from '@components/AboutSection';
import MainLayout from '@components/MainLayout';

export default function About() {
  const seoTitle = 'About - Gilang Irfansyah';
  const seoDesc = 'All about Gilang Irfansyah';
  const url = 'https://girfansyah.site/about'

  return (
    <MainLayout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        canonical={url}
        openGraph={{
          title: seoTitle,
          url: url,
          description: seoDesc,
          site_name: 'Gilang Irfansyah',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <AboutSection />
    </MainLayout>
  );
}
