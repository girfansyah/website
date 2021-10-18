import MainLayout from '@components/MainLayout';
import HeroSection from '@components/HeroSection';
import { heroSnippets } from '@lib/constants';

export default function Snippets() {
  return (
    <MainLayout>
      <HeroSection title={heroSnippets.title} content={heroSnippets.content} />
    </MainLayout>
  );
}
