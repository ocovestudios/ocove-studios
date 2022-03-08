import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "../components/footer";

const CookiePolicy = () => {

    return (
        <>
            <Head>
                <title>Cookie Policy | Ocove Studios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div className="policy__page-container" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <h2 className="policy__page-title">Cookie Policy.</h2>
                <p className="policy__page-text">A cookie is a small file of letters and numbers that is downloaded on to your computer when you visit a website. Cookies are used by many websites and can do a number of things, eg remembering your preferences, recording what you have put in your shopping basket, and counting the number of people looking at a website.</p>
            </motion.div>
            <Footer />
        </>
    );
}

export default CookiePolicy;