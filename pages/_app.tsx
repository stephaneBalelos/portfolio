import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../layout/layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
