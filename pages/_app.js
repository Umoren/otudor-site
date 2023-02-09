import '../styles/globals.css'
import Layout from '../components/SiteLayout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
