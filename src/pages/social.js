import { NextSeo } from 'next-seo';
import MainLayout from '@components/MainLayout';
import SocialSection from '@components/SocialSection';

export default function Social() {
  const seoTitle = 'Social - Gilang Irfansyah';
  const seoDesc = 'Connect with me';
  return (
    <MainLayout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://girfansyah.site/social`,
          description: seoDesc,
          site_name: 'Gilang Irfansyah',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <SocialSection />
    </MainLayout>
  );
}
