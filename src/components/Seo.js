import { DefaultSeo } from 'next-seo';

const config = {
  title: 'Gilang Irfansyah - Frontend Developer, Open Source, & Thinker',
  description:
    'I’m a frontend developer, open source & thinker that loves to create stuff!',
  canonical: 'https://girfansyah.site/',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'http://girfansyah.site',
    site_name: 'Gilang Irfansyah',
    images: [
      {
        url: 'http://girfansyah.site/static/images/banner.png',
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
