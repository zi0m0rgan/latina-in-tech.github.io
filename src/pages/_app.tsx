import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { MdxComponentsProvider } from '@/context/mdxContext';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <MdxComponentsProvider>
        <Component {...pageProps} />
      </MdxComponentsProvider>
    </>
  );
}
