import '../styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const [initialLoad, setInitialLoad] = useState(0);

  useEffect(() => {
    setInitialLoad(1)
    console.log(initialLoad)
  }, [initialLoad]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Navbar />
      <Component {...pageProps} initialLoad={initialLoad} />
    </AnimatePresence>
  )
}

export default MyApp