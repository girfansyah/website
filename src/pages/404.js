import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '@components/HeroSection';
import MainLayout from '@components/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
      <Head>
        <title>404 - Gilang Irfansyah</title>
      </Head>
      <div className='flex flex-col items-start max-w-3xl mx-auto px-4 sm:px-6 xl:px-8 pt-12 pb-24 lg:pb-16'>
        <h1 className='font-bold text-2xl md:text-4xl tracking-tight mb-4'>
          404 - Page Not Found
        </h1>
        <p className='text-gray-400 mb-8'>
          Uh oh! This page does not exists, maybe you clicked an old link or
          misspelled. Please try again…
        </p>
        <Link href='/'>
          <a className='px-4 py-2 text-gray-200 font-bold bg-gray-600 hover:bg-gray-500 transition-colors duration-300 text-center rounded-md'>
            Return Home
          </a>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
