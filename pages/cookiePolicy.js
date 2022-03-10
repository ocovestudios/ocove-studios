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
            <motion.div className="policy__page-container" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: .6, ease: "easeInOut" }}>
                <h2 className="policy__page-title">Cookie Policy</h2>
                <p className="policy__page-text">A cookie is a small file of letters and numbers that is downloaded onto your computer when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
                <p className="policy__page-text">
                This website does not use cookies to collect personally identifiable information about you as a user of the site.</p>
                <p className="policy__page-text">
                This website does contain hyperlinks to websites owned and operated by third parties. These websites have their own privacy policies, including cookies, and we urge you to review them. They will govern the use of any personal information you submit or which is collected by cookies while visiting these websites.
               </p>
            </motion.div>
            <Footer />
        </>
    );
}

export default CookiePolicy;