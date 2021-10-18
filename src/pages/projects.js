import { NextSeo } from 'next-seo';
import MainLayout from '@components/MainLayout';
import HeroSection from '@components/HeroSection';
import ProjectSection from '@components/ProjectSection';
import { heroProjects } from '@lib/constants';

export default function Projects() {
  const seoTitle = `${heroProjects.title} - Gilang Irfansyah`;
  return (
    <MainLayout>
      <NextSeo
        title={seoTitle}
        description={heroProjects.content}
        openGraph={{
          title: seoTitle,
          url: `https://girfansyah.vercel.app/projects`,
          description: heroProjects.content,
          site_name: 'Gilang Irfansyah',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <HeroSection title={heroProjects.title} content={heroProjects.content} />
      <ProjectSection />
    </MainLayout>
  );
}
