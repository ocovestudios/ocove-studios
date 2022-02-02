import Navbar from "../../components/navbar";
import { projectData } from "../../projectsData";
import Link from "next/link";

const Project = ({ projectData }) => {
    return (
        <>
            <Navbar />
            <div className="project--container">
                <Link href='/projects'><p className="project--back-arrow">&#8592;</p></Link>
                {projectData.title}
            </div>
        </>

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