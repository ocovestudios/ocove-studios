import HeaderArrow from "../components/headerarrow";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <>
            <Navbar />
            <div className="services--container">
                <div className="services--header-container">
                    <motion.h2 className="services--header-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >What we do</motion.h2>
                    <HeaderArrow />
                </div>
                <motion.div className="services--content-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
                    <div className="services--content">
                        <div className="services--asset-container">
                            <div className="services--asset"></div>
                            <h3 className="services--asset-title">Web Development</h3>
                        </div>
                        <p className="services--content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu auctor nisi. Suspendisse potenti. Nulla consequat magna in nisl euismod, sed mollis velit bibendum. Aliquam in nulla lorem. </p>
                    </div>
                    <div className="services--content">
                        <p className="services--content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu auctor nisi. Suspendisse potenti. Nulla consequat magna in nisl euismod, sed mollis velit bibendum. Aliquam in nulla lorem. </p>
                        <div className="services--asset-container">
                            <div className="services--asset"></div>
                            <h3 className="services--asset-title">3D Design</h3>
                        </div>

                    </div>
                    <div className="services--content">
                        <div className="services--asset-container">
                            <div className="services--asset"></div>
                            <h3 className="services--asset-title">Visual Identity</h3>
                        </div>
                        <p className="services--content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu auctor nisi. Suspendisse potenti. Nulla consequat magna in nisl euismod, sed mollis velit bibendum. Aliquam in nulla lorem. </p>
                    </div>
                </motion.div>
                <div className="services--header-container services--contact-header">
                    <HeaderArrow />
                    <motion.h2 className="services--header-title services--contact-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, dela: 0.5 }} >Contact</motion.h2>
                </div>
                <div className="services--contact-container">

                </div>
            </div>
        </>

    );
}

export default Services;