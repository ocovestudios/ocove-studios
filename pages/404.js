import { motion } from "framer-motion";
import { useFramerMotion } from "../lib/useFramerMotion";
import Head from 'next/head';

const Error = () => {

    const { Fade } = useFramerMotion()

    return (
        <>
            <Head>
                <title>Oops | Ocove Studios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
                <motion.h2 variants={Fade} initial='initial' animate='animate'>404  <span style={{ marginLeft: '1em' }}>|</span><span style={{ marginLeft: '1em', fontWeight: 100 }}>This page could not be found.</span></motion.h2>
            </div >
        </>
    );
}

export default Error;