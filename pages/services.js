import { animate, motion } from "framer-motion";
import ContactForm from "../components/contactform";
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import WebIcon from '../components/webIcon';
import Icon3D from '../components/3dIcon';
import LogoIcon from '../components/logoIcon'
import Head from "next/head";
import Footer from '../components/footer'
import LogoSVG from "../components/logoSVG";

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
                                <Canvas >
                                    <Suspense fallback={null}>
                                        <pointLight position={[20, 20, 10]} />
                                        <pointLight position={[-20, -20, 10]} />
                                        <WebIcon />
                                    </Suspense>
                                </Canvas>
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
                                <Canvas >
                                    <Suspense fallback={null}>
                                        <pointLight position={[20, 20, 10]} />
                                        <pointLight position={[-20, -20, 10]} />
                                        <pointLight position={[-20, -20, 30]} />
                                        <pointLight position={[-20, -20, -30]} />
                                        <Icon3D />
                                    </Suspense>
                                </Canvas>
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
                                <Canvas>
                                    <Suspense fallback={null}>
                                        <pointLight position={[20, 20, 10]} />
                                        <pointLight position={[10, 10, 5]} />
                                        <pointLight position={[-20, -20, 10]} />
                                        <pointLight position={[-20, -20, 30]} />
                                        <pointLight position={[-20, -20, -30]} />
                                        <LogoIcon />
                                    </Suspense>
                                </Canvas>
                            </div>
                            <h3 className="services--asset-title">VISUAL IDENTITY</h3>
                        </motion.div>
                        <motion.div className="content__text" variants={servicesTextFade} initial='initial' animate='animate' >
                            <p className="services--content-text content__text-focus">Crafting bespoke digital spaces</p>
                            <p className="services--content-text">
                                We work closely with people to grow their visual recognition, helping them forge a deeper connection with their audiences and
                                customers. We carefully consider your requirements and integrate your message from the initial design to the final product.                                </p>
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
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 58 58" width="29" height="29" xmlSpace="preserve" fill="#242424">
                                        <path d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001
                                    c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0
                                    s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013
                                    c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028
                                    c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58
                                    s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04
                                    C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217
                                    c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882
                                    C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972
                                    c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963
                                    c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028
                                    c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438
                                    c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036
                                    C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835
                                    c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072
                                    c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30
                                    H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318
                                    c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038
                                    c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972
                                    c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003
                                    c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z
                                    M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846
                                    z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781
                                    C44.177,52.078,38.672,54.958,32.521,55.763z"/>
                                    </svg>
                                </a>
                                <a className="contact__link" href='https://www.linkedin.com/in/billy-myles-berkouwer-229679222/' target="_blank" rel="noopener noreferrer">
                                    <img className="contact__image contact__linkedIn" src='img/linkedin.png' />
                                </a>
                            </div>
                        </li>
                        <li className="contact__list-item">
                            <p className="contact__name">Matt Congdon</p>
                            <div className="contact__links">
                                <a className="contact__link" href="https://mattcongdon.info/" target="_blank" rel="noopener noreferrer">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 58 58" width="29" height="29" xmlSpace="preserve" fill="#242424">
                                        <path d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001
                                    c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0
                                    s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013
                                    c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028
                                    c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58
                                    s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04
                                    C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217
                                    c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882
                                    C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972
                                    c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963
                                    c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028
                                    c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438
                                    c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036
                                    C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835
                                    c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072
                                    c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30
                                    H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318
                                    c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038
                                    c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972
                                    c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003
                                    c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z
                                    M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846
                                    z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781
                                    C44.177,52.078,38.672,54.958,32.521,55.763z"/>
                                    </svg>
                                </a>
                                <a className="contact__link" href='https://www.linkedin.com/in/mattcong/' target="_blank" rel="noopener noreferrer">
                                    <img className="contact__image contact__linkedIn" src='img/linkedin.png' />
                                </a>
                            </div>
                        </li>
                        <li className="contact__list-item">
                            <p className="contact__name">Arran Baker</p>
                            <div className="contact__links">
                                <a className="contact__link" href='https://www.arranbaker.com/' target="_blank" rel="noopener noreferrer">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 58 58" width="29" height="29" xmlSpace="preserve" fill="#242424">
                                        <path d="M50.688,48.222C55.232,43.101,58,36.369,58,29c0-7.667-2.996-14.643-7.872-19.834c0,0,0-0.001,0-0.001
                                    c-0.004-0.006-0.01-0.008-0.013-0.013c-5.079-5.399-12.195-8.855-20.11-9.126l-0.001-0.001L29.439,0.01C29.293,0.005,29.147,0,29,0
                                    s-0.293,0.005-0.439,0.01l-0.563,0.015l-0.001,0.001c-7.915,0.271-15.031,3.727-20.11,9.126c-0.004,0.005-0.01,0.007-0.013,0.013
                                    c0,0,0,0.001-0.001,0.002C2.996,14.357,0,21.333,0,29c0,7.369,2.768,14.101,7.312,19.222c0.006,0.009,0.006,0.019,0.013,0.028
                                    c0.018,0.025,0.044,0.037,0.063,0.06c5.106,5.708,12.432,9.385,20.608,9.665l0.001,0.001l0.563,0.015C28.707,57.995,28.853,58,29,58
                                    s0.293-0.005,0.439-0.01l0.563-0.015l0.001-0.001c8.185-0.281,15.519-3.965,20.625-9.685c0.013-0.017,0.034-0.022,0.046-0.04
                                    C50.682,48.241,50.682,48.231,50.688,48.222z M2.025,30h12.003c0.113,4.239,0.941,8.358,2.415,12.217
                                    c-2.844,1.029-5.563,2.409-8.111,4.131C4.585,41.891,2.253,36.21,2.025,30z M8.878,11.023c2.488,1.618,5.137,2.914,7.9,3.882
                                    C15.086,19.012,14.15,23.44,14.028,28H2.025C2.264,21.493,4.812,15.568,8.878,11.023z M55.975,28H43.972
                                    c-0.122-4.56-1.058-8.988-2.75-13.095c2.763-0.968,5.412-2.264,7.9-3.882C53.188,15.568,55.736,21.493,55.975,28z M28,14.963
                                    c-2.891-0.082-5.729-0.513-8.471-1.283C21.556,9.522,24.418,5.769,28,2.644V14.963z M28,16.963V28H16.028
                                    c0.123-4.348,1.035-8.565,2.666-12.475C21.7,16.396,24.821,16.878,28,16.963z M30,16.963c3.179-0.085,6.3-0.566,9.307-1.438
                                    c1.631,3.91,2.543,8.127,2.666,12.475H30V16.963z M30,14.963V2.644c3.582,3.125,6.444,6.878,8.471,11.036
                                    C35.729,14.45,32.891,14.881,30,14.963z M40.409,13.072c-1.921-4.025-4.587-7.692-7.888-10.835
                                    c5.856,0.766,11.125,3.414,15.183,7.318C45.4,11.017,42.956,12.193,40.409,13.072z M17.591,13.072
                                    c-2.547-0.879-4.991-2.055-7.294-3.517c4.057-3.904,9.327-6.552,15.183-7.318C22.178,5.38,19.512,9.047,17.591,13.072z M16.028,30
                                    H28v10.038c-3.307,0.088-6.547,0.604-9.661,1.541C16.932,37.924,16.141,34.019,16.028,30z M28,42.038v13.318
                                    c-3.834-3.345-6.84-7.409-8.884-11.917C21.983,42.594,24.961,42.124,28,42.038z M30,55.356V42.038
                                    c3.039,0.085,6.017,0.556,8.884,1.4C36.84,47.947,33.834,52.011,30,55.356z M30,40.038V30h11.972
                                    c-0.113,4.019-0.904,7.924-2.312,11.58C36.547,40.642,33.307,40.126,30,40.038z M43.972,30h12.003
                                    c-0.228,6.21-2.559,11.891-6.307,16.348c-2.548-1.722-5.267-3.102-8.111-4.131C43.032,38.358,43.859,34.239,43.972,30z
                                    M9.691,47.846c2.366-1.572,4.885-2.836,7.517-3.781c1.945,4.36,4.737,8.333,8.271,11.698C19.328,54.958,13.823,52.078,9.691,47.846
                                    z M32.521,55.763c3.534-3.364,6.326-7.337,8.271-11.698c2.632,0.945,5.15,2.209,7.517,3.781
                                    C44.177,52.078,38.672,54.958,32.521,55.763z"/>
                                    </svg>
                                </a>
                                <a className="contact__link" href='https://www.linkedin.com/in/arran-baker/' target="_blank" rel="noopener noreferrer">
                                    <img className="contact__image contact__linkedIn" src='img/linkedin.png' />
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