import { projectData } from "../../projectsData";
import { motion } from 'framer-motion'
import CloseArrow from "../../components/closeprojectarrow";

const Project = ({ project }) => {

    return (
        <motion.div initial={{ y: 1000 }} animate={{ y: 0, transition: { duration: .5 } }} exit={{ y: 1000, transition: { duration: .5 } }}>
            <div className="close-arrow__container"><CloseArrow /></div>
            <div className="project__container">
                <div className="info__container">
                    <h2 className="project__header">{project.title}</h2>
                    <p className="project__description">{project.description}</p>
                    <div className="info__links">
                        <div className="credits__container">
                            <p className="project__credits">{project.credits}</p>
                            <a href={projectData.creditLink} target="_blank" rel="noreferrer">{project.creditName}</a>
                        </div>
                        <a className="project__visit-link" href={project.visitLink} target="_blank" rel="noreferrer">VISIT</a>
                    </div>
                </div>
                <motion.div className="image__container" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .5, duration: .5 } }}>
                    <div className="image-wrap__desktop">
                        {project.desktopImages.map((img, index) => <img className="desktop-image" src={img} alt={projectData.title} key={img + index} />)}
                    </div>
                    <div className="image-wrap__mobile">
                        {project.mobileImages.map((img, index) => <img className="mobile-image" src={img} alt={projectData.title} key={img + index} />)}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export async function getStaticPaths() {

    const projects = projectData

    const paths = projects.map((p) => ({
        params: { id: p.id.toString() }
    })
    ).flat()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {

    const { params } = context;

    const project = projectData.find(({ id }) => id === params.id)

    return {
        props: {
            project: project
        },
    };
}

export default Project;