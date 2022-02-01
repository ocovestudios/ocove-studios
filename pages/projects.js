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
                    {projectData.map((project) => {
                        return (
                            <Link href={`/projects/${project.id}`}><li><a className="projects--links">{project.title}</a></li></Link>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default Projects;