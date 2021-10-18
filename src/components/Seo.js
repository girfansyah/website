import { DefaultSeo } from 'next-seo';

const config = {
  title: 'Gilang Irfansyah - Frontend Developer, Trader, & Thinker',
  description:
    'I’m a frontend developer, trader & thinker that loves to create stuff!',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'http://girfansyah.vercel.app',
    site_name: 'Gilang Irfansyah',
    images: [
      {
        url: 'http://girfansyah.vercel.app/static/images/banner.png',
        alt: 'Gilang Irfansyah',
      },
    ],
  },
  twitter: {
    handle: '@girfansyah8',
    site: '@girfansyah',
    cardType: 'summary_large_image',
  },
};

const Seo = () => {
  return <DefaultSeo {...config} />;
};

export default Seo;
