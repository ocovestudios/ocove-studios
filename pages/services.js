import HeaderArrow from "../components/headerarrow";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import ContactForm from "../components/contactform";

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
                        <div className="services--asset-container services--asset-container-2">
                            <div className="services--asset"></div>
                            <h3 className="services--asset-title">3D Design</h3>
                        </div>
                        <p className="services--content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu auctor nisi. Suspendisse potenti. Nulla consequat magna in nisl euismod, sed mollis velit bibendum. Aliquam in nulla lorem. </p>
                    </div>
                    <div className="services--content">
                        <div className="services--asset-container">
                            <div className="services--asset"></div>
                            <h3 className="services--asset-title">Visual Identity</h3>
                        </div>
                        <p className="services--content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu auctor nisi. Suspendisse potenti. Nulla consequat magna in nisl euismod, sed mollis velit bibendum. Aliquam in nulla lorem. </p>
                    </div>
                </motion.div>
                <div className="services__form-container">
                    <button className="services__form-button">TALK TO US</button>
                    <ContactForm />
                </div>
                <div className="services--header-container services--contact-header">
                    <HeaderArrow />
                    <motion.h2 className="services--header-title services--contact-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, dela: 0.5 }} >Contact</motion.h2>
                </div>
                <div className="services__contact-container">
                    <ul className="contact__list">
                        <li className="contact__list-item">
                            <p className="contact__name">Billy Myles-Berkouwer</p>
                            <div className="contact__links">
                                <a className="contact__link">[]</a>
                                <a className="contact__link">[]</a>
                            </div>
                        </li>
                        <li className="contact__list-item">
                            <p className="contact__name">Matt Congdon</p>
                            <div className="contact__links">
                                <a className="contact__link">[]</a>
                                <a className="contact__link">[]</a>
                            </div>
                        </li>
                        <li className="contact__list-item">
                            <p className="contact__name">Arran Baker</p>
                            <div className="contact__links">
                                <a className="contact__link">[]</a>
                                <a className="contact__link">[]</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
}

export default Services;