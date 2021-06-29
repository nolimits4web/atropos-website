import Head from 'next/head';

import '../styles/globals.scss';
import 'mariko/mariko.css';

function MyApp({ Component, pageProps }) {
  const title = 'Mariko - stunning touch-friendly 3D hover effects';
  const description = '';
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:title" content="Mariko" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://marikojs.com/images/share-banner.png"
        />
        <meta property="og:site_name" content="Mariko" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nolimits4web" />
        <meta name="twitter:creator" content="@nolimits4web" />
        <meta name="twitter:title" content="Mariko" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://marikojs.com/images/share-banner.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
