import { useState } from "react";
import Project from "./project";

const ProjectList = (props) => {

    const projects = props.projects

    function handleChangeDescription(project) {
        return props.changeDescription(project.projectDescription, project.url)
    }

    const [selectedProject, setSelectedProject] = useState(0)

    const projectsList = projects.map((project, index) => (
        <li
            key={index}
            onClick={() => {
                handleChangeDescription(project)
            }}
        >
            <Project
                index={index}
                url={project.url}
                projectName={project.projectName}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject  }
            />
        </ li>
    ))


    return (

        <div className="container-2">
            <h2>Projects:</h2>
            <hr />
            <form>
                <p className="mb-2">Please select a project to inspect:</p>
                <ul>
                    {projectsList}
                </ul>
            </form>
        </div>
    )
}



export default ProjectList;