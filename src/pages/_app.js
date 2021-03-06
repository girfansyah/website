import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import Seo from '@components/Seo';
import * as ga from '@lib/ga';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <Fragment>
      <Seo />
      <NextNProgress
        color='linear-gradient(
          110.78deg,
          rgb(118, 230, 80) -1.13%,
          rgb(249, 214, 73) 15.22%,
          rgb(240, 142, 53) 32.09%,
          rgb(236, 81, 87) 48.96%,
          rgb(255, 24, 189) 67.94%,
          rgb(26, 75, 255) 85.34%,
          rgb(98, 216, 249) 99.57%
        )'
        options={{ easing: 'ease', speed: 500 }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
