import MainLayout from '@components/MainLayout';
import ProjectSection from '@components/ProjectSection';
import HeroSection from '@components/HeroSection';
import SocialSection from '@components/SocialSection';
import { heroHome } from '@lib/constants';
import StuffSection from '@components/StuffSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection isPartial content={heroHome.content} />
      <ProjectSection isPartial />
      <SocialSection isPartial />
      <StuffSection />
    </MainLayout>
  );
}
