import { projectData } from "../../projectsData";
import { motion } from 'framer-motion'
import CloseArrow from "../../components/closeprojectarrow";

const Project = ({ projectData }) => {

    return (
        <motion.div initial={{ y: 1000 }} animate={{ y: 0, transition: { duration: .5 } }} exit={{ y: 1000, transition: { duration: .5 } }}>
            <div className="close-arrow__container"><CloseArrow /></div>
            <div className="project__container">
                <div className="info__container">
                    <h2 className="project__header">{projectData.title}</h2>
                    <p className="project__description">{projectData.description}</p>
                    <div className="info__links">
                        <div className="credits__container">
                            <p className="project__credits">{projectData.credits}</p>
                            <a href={projectData.creditLink} target="_blank" rel="noreferrer">{projectData.creditName}</a>
                        </div>
                        <a className="project__visit-link" href={projectData.visitLink} target="_blank" rel="noreferrer">VISIT</a>
                    </div>
                </div>
                <motion.div className="image__container" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .5, duration: .5 } }}>
                    <div className="image-wrap__desktop">
                        {projectData.desktopImages.map((img, index) => <img className="desktop-image" src={img} alt={projectData.title} key={img + index} />)}
                    </div>
                    <div className="image-wrap__mobile">
                        {projectData.mobileImages.map((img, index) => <img className="mobile-image" src={img} alt={projectData.title} key={img + index} />)}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export async function getStaticProps(context) {

    const id = context.params.id

    const res = await fetch('https://www.ocovestudios.vercel.app/api/projects/' + id)
    const projectData = await res.json()

    return { props: { projectData: projectData } }
}

export async function getStaticPaths() {

    const projects = projectData

    const paths = projects.map((p) => {
        return {
            params: { id: p.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default Project;