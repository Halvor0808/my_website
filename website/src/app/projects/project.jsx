import React from "react";

const Project = (props) => {

    return (
        <>
            <input
                type="radio"
                index={props.index}
                name="project-to-view"
                id={props.projectName}
                value={props.index}
                defaultChecked={props.index === props.selectedProject}
                />
            <label 
            htmlFor={props.projectName}
            className="flex-auto project"
            >
                <h3 className="text-lg">{props.projectName}</h3>
                {props.children}
            </label>
        </>
    );
}

export default Project;