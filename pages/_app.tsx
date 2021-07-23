import Layout from '../src/component/Layout';
import '../styles/globals.css';
import '../styles/reset.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
