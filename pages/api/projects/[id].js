import { projectData } from "../../../projectsData";

export default async (req, res) => {

    const project = projectData.find(({ id }) => id === req.query.id);

    if (project) {
        res.status(200).json(project);
    } else if (res.status === 400) {
        res.status(400).json({ message: "product not found" });
    } else if (res.status === 401) {
        throw new Error(res.status)
    } else {
        throw new Error(res.status)
    }
}