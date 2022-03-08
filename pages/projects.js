import { projectData } from "../projectsData";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const Projects = () => {

    const projectContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delay: 0.3
            },
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.1, duration: 0.7 },
        }
    }

    const projectTile = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
        },
        exit: {
            opacity: 0,
            x: -300,
            transition: {
                duration: .4,
                ease: "easeIn"
            }
        }
    }

    return (
        <>
            <Head>
                <title>Projects | Ocove Studios</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <motion.div className="projects__container" variants={projectContainer} initial='initial' animate='animate' exit='exit'>
                {projectData.map((project, projectIndex) => {
                    return (
                        <motion.div className="projects__tile" variants={projectTile} key={`projectTile-${projectIndex}`}>
                            <Link href={project.url} passHref>
                                <motion.div className="tile__image-container">
                                    <Image src={project.imageUrl} alt={project.title} width={600} height={400} layout='fill' />
                                </motion.div>
                            </Link>
                            <Link href={project.url} passHref><motion.p className="tile__title">{project.title}</motion.p></Link>
                        </motion.div>
                    )
                })}
            </motion.div >
        </>
    );
}

export default Projects;