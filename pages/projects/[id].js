import Navbar from "../../components/navbar";
import { projectData } from "../../projectsData";
import Link from "next/link";
import { useRouter } from "next/router";

const Project = ({ projectData }) => {

    return (
        <div>
            <h2 style={{ marginTop: '6em', marginLeft: '4em' }}>{projectData.title}</h2>
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