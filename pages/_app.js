import '../styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    })

  }, [router.events])


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