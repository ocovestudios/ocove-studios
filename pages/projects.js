import { projectData } from "../projectsData";
import Navbar from "../components/navbar";
import Link from "next/link";

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="projects--container">
                <h2>Projects</h2>
                <ul className="projects--list">
                    {projectData.map((project, index) => {
                        return (
                            <Link href={`/projects/${project.id}`} key={index}><li ><a className="projects--links">{project.title}</a></li></Link>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default Projects;