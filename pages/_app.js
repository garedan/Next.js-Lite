import App from 'next/app'
import Layout from '../components/Layout/layout'
import '../globals.css';

export default function MyApp({ Component, pageProps }) {
 
  //  Providers - Context/Providers - Themes
  //  Layout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}