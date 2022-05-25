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

    const servicesIconFade = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: .5, delay: .4 } },

    }

    const servicesTextFade = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: .5, delay: .6 } },
    }

    return (
        <>
            <Head>
                <title>Services | Ocove Studios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="services__container">
                <div className="services__content-container">

                    <div className="services__header-container">
                        <motion.p className="services__title--left" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>What we do</motion.p>
                        <svg width="255" height="10" viewBox="0 0 285 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.line y1="-1" x2="276.27" y2="-1" transform="matrix(1 0 0 -1 0 4)" stroke="#292929" strokeWidth="2" initial={{ x2: 0, opacity: 0 }} animate={{ x2: 276.27, opacity: 1, }} transition={{ duration: .4, ease: 'easeOut', delay: .5 }} viewport={{ once: true }} />
                            <motion.rect width="10" height="10" transform="matrix(1 0 0 -1 275 10)" fill="#292929" initial={{ x: 0, opacity: 0 }} animate={{ x: 276.27, opacity: 1 }} transition={{ duration: .4, ease: 'easeOut', delay: .5 }} viewport={{ once: true }} />
                        </svg>
                    </div>

                    <div className="services__content--left">
                        <motion.div className="service__icon-container--left" variants={servicesIconFade} initial="initial" animate="animate">
                            <div className="service__icon">
                                <WebIcon />
                            </div>
                            <p className="service__icon-title" >WEB DEVELOPMENT</p>
                        </motion.div>
                        <motion.div className="service__text-wrap" variants={servicesTextFade} initial="initial" animate="animate">
                            <p className="service__text-focus">Modern web development and creative design</p>
                            <p className="service__text"> We like to work with code. Whatever the project we develop an approach to meet your vision,
                                combining cutting-edge technologies with clean aesthetics to ensure you make the best impression.</p>
                        </motion.div>
                    </div>

                    <div className="services__content--right">
                        <motion.div className="service__icon-container--right" variants={servicesIconFade} initial="initial" whileInView={"animate"} viewport={{ once: true }}>
                            <div className="service__icon">
                                <ThreeDIcon />
                            </div>
                            <p className="service__icon-title" >3D DESIGN</p>
                        </motion.div>
                        <motion.div className="service__text-wrap" variants={servicesTextFade} initial="initial" whileInView={"animate"} viewport={{ once: true }}>
                            <p className="service__text-focus">3D modelling and asset creation</p>
                            <p className="service__text">We make custom assets in house, using the latest 2D and 3D software to
                                produce bespoke icons, models and scenes unique to your brand.</p>
                        </motion.div>
                    </div>

                    <div className="services__content--left">
                        <motion.div className="service__icon-container--left" variants={servicesIconFade} initial="initial" whileInView={"animate"} viewport={{ once: true }}>
                            <div className="service__icon">
                                <LogoIcon />
                            </div>
                            <p className="service__icon-title" >VISUAL IDENTITY</p>
                        </motion.div>
                        <motion.div className="service__text-wrap" variants={servicesTextFade} initial="initial" whileInView={"animate"} viewport={{ once: true }}>
                            <p className="service__text-focus">Crafting digital spaces</p>
                            <p className="service__text">We work closely with people to grow their visual recognition, helping them forge a deeper connection with their audiences and
                                customers. We carefully consider your requirements and integrate your message throughout the design and development process.</p>
                        </motion.div>
                    </div>
                </div>

                <div className="services__form-container">
                    <ContactForm />
                </div>
                <a href="mailto:ocovestudios@gmail.com"><motion.button className="services__email-button--mobile"> TALK TO US </motion.button></a>

                <div className="services__contact-container">
                    <div className="services__header-container">
                        <motion.p className="services__title--left" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>Contact</motion.p>
                        <svg width="255" height="10" viewBox="0 0 285 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.line y1="-1" x2="276.27" y2="-1" transform="matrix(1 0 0 -1 0 4)" stroke="#292929" strokeWidth="2" initial={{ x2: 0, opacity: 0 }} animate={{ x2: 276.27, opacity: 1, }} transition={{ duration: .4, ease: 'easeOut', delay: .5 }} viewport={{ once: true }} />
                            <motion.rect width="10" height="10" transform="matrix(1 0 0 -1 275 10)" fill="#292929" initial={{ x: 0, opacity: 0 }} animate={{ x: 276.27, opacity: 1 }} transition={{ duration: .4, ease: 'easeOut', delay: .5 }} viewport={{ once: true }} />
                        </svg>
                    </div>
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
            </div>
            <Footer />
        </>
    );
}

export default Services;