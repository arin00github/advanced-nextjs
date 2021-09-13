import '../styles/globals.css';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Component } from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
