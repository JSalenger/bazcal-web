import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
        <div>
            <Head>
                <title>Bazcal</title>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>
            <Component {...pageProps} style={{minHeight: "1080px"}}/>
        </div>
  )
  
}

