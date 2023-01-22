import '../styles/globals.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Layout from '../components/Layout'

//import "@fortawesome/fontawesome-free/css/all.min.css";
export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
