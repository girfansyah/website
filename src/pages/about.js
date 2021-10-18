import { NextSeo } from 'next-seo';
import AboutSection from '@components/AboutSection';
import MainLayout from '@components/MainLayout';

export default function About() {
  const seoTitle = 'About - Gilang Irfansyah';
  const seoDesc = 'All about Gilang Irfansyah';

  return (
    <MainLayout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://girfansyah.vercel.app/about`,
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
