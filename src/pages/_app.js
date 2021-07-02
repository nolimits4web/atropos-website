import Head from 'next/head';
import { useGA } from '../shared/use-ga';

import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
  const title =
    Component.title ||
    'Atropos - Stunning touch-friendly 3D parallax hover effects';
  const description =
    'Atropos is a lightweight, free and open-source JavaScript library to create stunning touch-friendly 3D parallax hover effects.';

  useGA(router);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:title" content="Atropos" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://atroposjs.com/images/share-banner.png"
        />
        <meta property="og:site_name" content="Atropos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nolimits4web" />
        <meta name="twitter:creator" content="@nolimits4web" />
        <meta name="twitter:title" content="Atropos" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://atroposjs.com/images/share-banner.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
