import BrandName from "../components/brandname"
import ParagraphArrow from "../components/paragrapharrow"
import HomeParticles from "../components/particles"
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ThreeScene } from "../components/ThreeComponents/threeScene";
import { motion, useAnimation } from "framer-motion"
import Head from "next/head";
import Footer from '../components/footer';

export default function Home() {

  const footerParentVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 }
  }

  const info1ParentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } }
  }

  const info2ParentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.3 } }
  }

  const info1Variants = {
    initial: { opacity: 0, y: 15, skewX: 50, skewY: 1 },
    animate: { opacity: 1, y: 0, skewX: 0, skewY: 0 }
  }

  const info2LeftVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
  }

  const info2RightVariants = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 }
  }

  const revealButtonControls = useAnimation()
  const contactButtonControls = useAnimation()

  const sequence = async () => {
    await revealButtonControls.start({ rotate: -180, transition: { duration: .3 } })
    await contactButtonControls.start({ display: "block", opacity: 1, x: 0, transition: { delay: 0.05, duration: .2, ease: [0.20, 0.06, 0.04, 0] } })
  }

  const threeContainer = useRef();

  useEffect(() => {
    const threeScene = new ThreeScene(threeContainer.current);
    threeScene.start()
    return () => {
      threeScene.stop()
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home | Ocove Studios</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div className='home__container' exit={{ opacity: 0 }}>
        <motion.div className="three-background" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} ref={e => threeContainer.current = e}></motion.div>
        <section className="home1">
          <BrandName />
          <motion.div className="home1__footer" variants={footerParentVariants} initial="initial" animate="animate">
            <motion.p>CREATIVE DIGITAL SERVICES</motion.p>
            <div className="footer__contact-button-wrapper">
              <motion.a className="footer__contact-button" animate={contactButtonControls} initial={{ opacity: 0, x: 27 }} href="mailto:ocovestudios@gmail.com">CONTACT</motion.a>
              <motion.button className="footer__reveal-contact-button" animate={revealButtonControls} onClick={() => sequence()}>+</motion.button>
            </div>
          </motion.div>
        </section>

        <section className="home2">
          <div className="info-container">
            <motion.div className="home2__info" variants={info1ParentVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.div variants={info1Variants}>
                <div className="paragraph-arrow"><ParagraphArrow />
                </div> We are a UK-based freelance collective </motion.div>
              <motion.div variants={info1Variants}> specialising in website development, design </motion.div>
              <motion.div variants={info1Variants}> and 3D visualisation, providing innovative </motion.div>
              <motion.div variants={info1Variants}> digital products for creatives, </motion.div>
              <motion.div variants={info1Variants}> brands and businesses.</motion.div>
            </motion.div>
            <div className="home2__info--mobile">
              We are a UK-based freelance collective
              specialising in website development, design
              and 3D visualisation, providing innovative
              digital products for creatives,
              brands and businesses.
            </div>
          </div>
        </section>

        <section className="home3">
          <div className="home3__left">
            <div className="info-container">
              <motion.div variants={info2ParentVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <motion.div className="home3__info" variants={info2LeftVariants}>
                  Working as a collective allows us to bring our best creative assets to projects.</motion.div>
                <motion.div className="home3__info" variants={info2LeftVariants}><div className="paragraph-arrow"><ParagraphArrow /></div>
                  Collaborating as individuals, we can make things together that we couldn&#39;t alone.
                </motion.div>
              </motion.div>
              <div className="home3__info--mobile">
                Working as a collective allows us to bring our best creative assets to projects.<br /><br />
                Collaborating as individuals, we can make things together that we couldn&#39;t alone.
              </div>
            </div>
          </div>
          <motion.div className="home3__right" variants={info2ParentVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="particle-container" variants={info2RightVariants}>
              <HomeParticles />
            </motion.div>
            <Link href='/projects' passHref><motion.button className="view-projects-button" variants={info2RightVariants}> SEE OUR WORK </motion.button></Link>
          </motion.div>
        </section>

      </motion.div>
      <Footer />
    </>
  )
}