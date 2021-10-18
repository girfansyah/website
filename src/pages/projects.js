import MainLayout from '@components/MainLayout';
import HeroSection from '@components/HeroSection';
import ProjectSection from '@components/ProjectSection';
import { heroProjects } from '@lib/constants';

export default function Projects() {
  return (
    <MainLayout>
      <HeroSection title={heroProjects.title} content={heroProjects.content} />
      <ProjectSection />
    </MainLayout>
  );
}
