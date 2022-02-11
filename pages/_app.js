import '../styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Navbar />
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp