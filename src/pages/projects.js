import { NextSeo } from 'next-seo';
import MainLayout from '@components/MainLayout';
import HeroSection from '@components/HeroSection';
import ProjectSection from '@components/ProjectSection';
import { heroProjects } from '@lib/constants';
import { getDatabase } from '@lib/notion';

export default function Projects({ projects }) {
  const seoTitle = `${heroProjects.title} - Gilang Irfansyah`;
  const url = 'https://girfansyah.site/projects'
  return (
    <MainLayout>
      <NextSeo
        title={seoTitle}
        description={heroProjects.content}
        canonical={url}
        openGraph={{
          title: seoTitle,
          url: url,
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

export async function getStaticProps() {
  const database = await getDatabase();
  const projects = database
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(({ status }) => status === 'Published')
    .filter(({ type }) => type === 'Projects');

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}
