import '../styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
        <Footer />
      </AnimatePresence>

    </>
  )
}

export default MyApp