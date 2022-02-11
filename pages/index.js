import Navbar from "../components/navbar";
import BrandName from "../components/brandname"
import ParagraphArrow from "../components/paragrapharrow"
import HomeParticles from "../components/particles"
import Link from "next/link";
import { motion } from "framer-motion"

export default function Home() {

  const navParentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.2 } }
  }

  const navIconVariants = {
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

  return (
    <>
      <section className="home1">
        <BrandName />
        <motion.div className="home1__footer" variants={navParentVariants} initial="initial" animate="animate">
          <motion.p variants={navIconVariants}>CREATIVE DIGITAL SERVICES</motion.p>
          <motion.p variants={navIconVariants}>CONTACT</motion.p>
        </motion.div>
      </section>

      <section className="home2">
        <div className="info-container">
          <motion.p className="home2__info" variants={info1ParentVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.p variants={info1Variants}>
              <div className="paragraph-arrow"><ParagraphArrow />
              </div> We are a UK-based freelance collective </motion.p>
            <motion.p variants={info1Variants}> specialising in website development, video </motion.p>
            <motion.p variants={info1Variants}> production and 3D visualisation, providing </motion.p>
            <motion.p variants={info1Variants}> innovative digital products for creatives, </motion.p>
            <motion.p variants={info1Variants}> brands and businesses.</motion.p>
          </motion.p>
        </div>
      </section>

      <section className="home3">
        <div className="home3__left">
          <div className="info-container">
            <motion.p variants={info2ParentVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.p className="home3__info" variants={info2LeftVariants}>
                Working as a collective allows us to bring our best creative assets to projects.</motion.p>
              <motion.p className="home3__info" variants={info2LeftVariants}><div className="paragraph-arrow"><ParagraphArrow /></div>
                Collaborating as individuals, we can make things together that we couldn&#39;t alone.
              </motion.p>
            </motion.p>
          </div>
        </div>
        <motion.div className="home3__right" variants={info2ParentVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <motion.div className="particle-container" variants={info2RightVariants}>
            <HomeParticles />
          </motion.div>
          <Link href='/projects'><motion.button className="view-projects-button" variants={info2RightVariants}> SEE OUR WORK </motion.button></Link>
        </motion.div>
      </section>
    </>
  )
}