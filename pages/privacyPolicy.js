import { motion } from "framer-motion";
import Head from "next/head";

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | Ocove Studios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div className="policy__page-container" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <h2 className="policy__page-title">Privacy Policy.</h2>
                <p className="policy__page-text">In accordance with GDPR (General Data Protection Regulation) requirements, we are committed to protecting and respecting your privacy. This website does not use cookies, and personal information is not tracked or retained.
                </p>
                <p className="policy__page-text">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                </p>
            </motion.div>
        </>
    );
}

export default PrivacyPolicy;