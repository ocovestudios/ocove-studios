import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "../components/footer";

const PrivacyPolicy = () => {

    return (
        <>
            <Head>
                <title>Privacy Policy | Ocove Studios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div className="policy__page-container" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: .6, ease: "easeInOut" }}>
                <h2 className="policy__page-title">Privacy Policy</h2>
                <p className="policy__page-text">In accordance with GDPR (General Data Protection Regulation) requirements, we are committed to protecting and respecting your privacy. This website does not use cookies, and personal information is not tracked or retained.
                </p>
                <p className="policy__page-text">We may collect some personal information when you contact us, such as your name and contact details. When you voluntarily share your information with us, you consent to the processing, collecting and storing of that data.
                </p>
            </motion.div>
            <Footer />
        </>
    );
}

export default PrivacyPolicy;