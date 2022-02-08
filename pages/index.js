import Navbar from "../components/navbar";
import BrandName from "../components/brandname"
import ParagraphArrow from "../components/paragrapharrow"

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="home1">
        <BrandName />
        <div className="home1__footer">
          <p>CREATIVE DIGITAL SERVICES</p>
          <p>CONTACT</p>
        </div>
      </section>

      <section className="home2">
        <div className="home2__info-container">
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
          <div className="home3__info-container">
            <div>
            <p>Working as a collective allows us to bring our best creative assets to projects.</p>
            <p><div className="paragraph-arrow"><ParagraphArrow />
            </div>Collaborating as individuals, we can make things together that we couldn&#39;t alone.</p>
            </div>
          </div>
        </div>
        <div className="home3__right">
          <div className="particle-container"></div>
          <button className="view-projects-button"> SEE OUR WORK </button>
        </div>

      </section>

    </div>
  )
}