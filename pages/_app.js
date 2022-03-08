import '../styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.pathname])

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>

    </>
  )
}

export default MyApp