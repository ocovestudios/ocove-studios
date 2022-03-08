import { motion } from "framer-motion";
import ContactForm from "../components/contactform";
import Head from "next/head";
import Footer from '../components/footer'
import LogoSVG from "../components/logoSVG";
import GlobeSVG from "../components/globeSVG";
import WebIcon from "../components/3DIcons/WebIcon";
import ThreeDIcon from "../components/3DIcons/ThreeDIcon";
import LogoIcon from "../components/3DIcons/LogoIcon";


const Services = () => {

    const servicesAssetFade = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1, delay: 1.5 } },

    }

    const servicesTextFade = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1, delay: 2 } },

    }

    return (
        <>
            <Head>
                <title>Services | Ocove Studios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div className="services--container" exit={{ opacity: 0 }}>
                <div className="services--header-container">
                    <motion.h2 className="services--header-title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>What we do</motion.h2>
                    <svg width="255" height="10" viewBox="0 0 285 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.line y1="-1" x2="276.27" y2="-1" transform="matrix(1 0 0 -1 0 4)" stroke="black" strokeWidth="2" initial={{ x2: 0, opacity: 0 }} animate={{ x2: 276.27, opacity: 1, }} transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }} viewport={{ once: true }} />
                        <motion.rect width="10" height="10" transform="matrix(1 0 0 -1 275 10)" fill="black" initial={{ x: 0, opacity: 0 }} animate={{ x: 276.27, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }} viewport={{ once: true }} />
                    </svg>
                </div>
                <div className="services--content-container">
                    <div className="services--content">
                        <motion.div className="services--asset-container" variants={servicesAssetFade} initial='initial' animate='animate' >
                            <div className="services--asset">
                                <WebIcon />
                            </div>
                            <h3 className="services--asset-title" >WEB DEVELOPMENT</h3>
                        </motion.div>
                        <motion.div className='content__text' variants={servicesTextFade} initial='initial' animate='animate'>
                            <p className="services--content-text content__text-focus">We specialise in modern web development and creative design</p>
                            <p className="services--content-text"> We like to work with code. Whatever the project we develop an approach to meet your vision,
                                combining cutting-edge technologies with clean aesthetics to ensure you make the best impression.  </p>
                        </motion.div>
                    </div >
                    <div className="services--content">
                        <motion.div className="services--asset-container services--asset-container-2" variants={servicesAssetFade} initial='initial' animate='animate'>
                            <div className="services--asset services--asset-2">
                                <ThreeDIcon />
                            </div>
                            <h3 className="services--asset-title asset__title-2" >3D DESIGN</h3>
                        </motion.div>
                        <motion.div className="content__text content__text-2 " variants={servicesTextFade} initial='initial' animate='animate' >
                            <p className="services--content-text content__text-focus">3D modelling and asset creation</p>
                            <p className="services--content-text"> We make custom assets in house, using the latest 2D and 3D software to
                                produce icons, models and scenes unique to your brand, sending your online presence into the next dimension.
                            </p>
                        </motion.div>
                    </div>
                    <div className="services--content services__content-3" >
                        <motion.div className="services--asset-container" variants={servicesAssetFade} initial='initial' animate='animate'>
                            <div className="services--asset">
                                {/*<LogoIcon />*/}
                            </div>
                            <h3 className="services--asset-title">VISUAL IDENTITY</h3>
                        </motion.div>
                        <motion.div className="content__text" variants={servicesTextFade} initial='initial' animate='animate' >
                            <p className="services--content-text content__text-focus">Crafting bespoke digital spaces</p>
                            <p className="services--content-text">
                                We work closely with people to grow their visual recognition, helping them forge a deeper connection with their audiences and
                                customers. We carefully consider your requirements and integrate your message from the initial design to the final product.</p>
                        </motion.div>
                    </div>
                </div >
                <div className="services__form-container">
                    <ContactForm />
                </div>
                <div className="services--header-container services--contact-header" style={{ justifyContent: 'flex-end' }}>
                    <svg width="255" height="10" viewBox="0 0 285 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '2rem' }}>
                        <motion.line y1="-1" x2="276.27" y2="-1" transform="matrix(1 0 0 -1 0 4)" stroke="black" strokeWidth="2" initial={{ x2: 10, opacity: 0 }} animate={{ x2: 276.27, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }} viewport={{ once: true }} />
                        <motion.rect width="10" height="10" transform="matrix(1 0 0 -1 275 10)" fill="black" initial={{ x: 10, opacity: 0 }} animate={{ x: 276.27, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }} viewport={{ once: true }} />
                    </svg>
                    <motion.h2 className="services--header-title services--contact-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >Contact</motion.h2>
                </div>
                <div className="services__contact-container">
                    <ul className="contact__list">
                        <li className="contact__list-item">
                            <p className="contact__name">Billy Myles-Berkouwer</p>
                            <div className="contact__links">
                                <a className="contact__link" href='https://bmbservices.netlify.app/' target="_blank" rel="noopener noreferrer">
                                    <GlobeSVG />
                                </a>
                                <a className="contact__link" href='https://www.linkedin.com/in/billy-myles-berkouwer-229679222/' target="_blank" rel="noopener noreferrer">
                                    <img className="contact__image contact__linkedIn" src='img/linkedin.png' alt='linked-in' />
                                </a>
                            </div>
                        </li>
                        <li className="contact__list-item">
                            <p className="contact__name">Matt Congdon</p>
                            <div className="contact__links">
                                <a className="contact__link" href="https://mattcongdon.info/" target="_blank" rel="noopener noreferrer">
                                    <GlobeSVG />
                                </a>
                                <a className="contact__link" href='https://www.linkedin.com/in/mattcong/' target="_blank" rel="noopener noreferrer">
                                    <img className="contact__image contact__linkedIn" src='img/linkedin.png' alt='linked-in' />
                                </a>
                            </div>
                        </li>
                        <li className="contact__list-item">
                            <p className="contact__name">Arran Baker</p>
                            <div className="contact__links">
                                <a className="contact__link" href='https://www.arranbaker.com/' target="_blank" rel="noopener noreferrer">
                                    <GlobeSVG />
                                </a>
                                <a className="contact__link" href='https://www.linkedin.com/in/arran-baker/' target="_blank" rel="noopener noreferrer">
                                    <img className="contact__image contact__linkedIn" src='img/linkedin.png' alt='linked-in' />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <motion.div className="contact-logo-wrapper" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: 'easeOut', duration: 2 }} viewport={{ once: true }}>
                        <LogoSVG />
                    </motion.div>
                </div>
            </motion.div >
            <Footer />
        </>
    );
}

export default Services;