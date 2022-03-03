import { projectData } from "../../projectsData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Project = ({ projectData }) => {


    return (
        <div>
            <div className="project__container">
                <div className="info__container">
                    <h2 className="project__header">{projectData.title}</h2>
                    <p className="project__description">{projectData.description}</p>
                    <div className="info__links">
                        <div className="credits__container">
                            <p className="project__credits">{projectData.credits}</p>
                            <a href={projectData.creditLink} target="_blank">{projectData.creditName}</a>
                        </div>
                        <a href={projectData.visitLink} target="_blank">VISIT</a>
                    </div>
                </div>
                <div className="image__container">
                    <div className="image-wrap__desktop">
                        {projectData.desktopImages.map(img => <img className="desktop-image" src={img} alt={projectData.title} />)}
                    </div>
                    <div className="image-wrap__mobile">
                        {projectData.mobileImages.map(img => <img className="mobile-image" src={img} alt={projectData.title} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps(context) {

    const id = context.params.id

    const res = await fetch('http://localhost:3000/api/projects/' + id)
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