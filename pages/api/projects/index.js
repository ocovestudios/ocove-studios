import { projectData } from "../../../projectsData"

export default async (req, res) => {
    res.status(200).json(projectData)
}