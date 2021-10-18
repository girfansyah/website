import MainLayout from '@components/MainLayout';
import HeroSection from '@components/HeroSection';
import { heroBlog } from '@lib/constants';

export default function Blog() {
  return (
    <MainLayout>
      <HeroSection title={heroBlog.title} content={heroBlog.content} />
    </MainLayout>
  );
}
