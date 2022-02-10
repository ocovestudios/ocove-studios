import Navbar from "../components/navbar";
import BrandName from "../components/brandname"
import ParagraphArrow from "../components/paragrapharrow"
import HomeParticles from "../components/particles"
import Link from "next/link";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="home1">
        <BrandName />
        <motion.div className="home1__footer">
          <motion.p>CREATIVE DIGITAL SERVICES</motion.p>
          <motion.p>CONTACT</motion.p>
        </motion.div>
      </section>

      <section className="home2">
        <div className="info-container">
          <p className="home2__info">
            <div>
              <div className="paragraph-arrow"><ParagraphArrow />
              </div> We are a UK-based freelance collective </div>
            <div> specialising in website development, video </div>
            <div> production and 3D visualisation, providing </div>
            <div> innovative digital products for creatives, </div>
            <div> brands and businesses.</div>
          </p>
        </div>

      </section>

      <section className="home3">
        <div className="home3__left">
          <div className="info-container">
            <p className="home3__info">
              Working as a collective allows us to bring our best creative assets to projects.</p>
            <p className="home3__info"><div className="paragraph-arrow"><ParagraphArrow /></div>
              Collaborating as individuals, we can make things together that we couldn&#39;t alone.
            </p>
          </div>
        </div>

        <div className="home3__right">
          <div className="particle-container">
            <HomeParticles />
          </div>
          <Link href='/projects'><button className="view-projects-button"> SEE OUR WORK </button></Link>
        </div>

      </section>

    </div>
  )
}