import React from "react";

const Project = (props) => {
    return (
        <li>
            <a href={props.ProjectLink}><h3>{props.ProjectName}</h3></a>
            {/* <p>Desrcibing paragraph</p> */}
        </li>
    );
}

export default Project;