'use client'
import { useState } from "react";
import ProjectList from "./projectList";
import { TECH, getTechImage } from "./tech"

export default function Projects() {

  const projects = [
    {
      id: 0,
      techStack: Object.values(TECH),
      projectName: "Default",
      projectDescription: "These are just a bunch of the projects that I have worked on previously. \
      Some are old and outdated, and others are \"works in progress\".\
      These projects, as well as this website are just a journey to learn a tiny bit more. "
    },
    {
      id: 1,
      url: "https://github.com/Halvor0808/my_website",
      techStack: [TECH.NEXT, TECH.REACT],
      projectName: "My web site",
      projectDescription: "I created this project because I had little knowledge of web development \
      and I simply felt like doing something about it. \
      This project is using next.js 13 with React, and I am having a hard time with every little thing. \
      Everything from CSS formating, how next.js works, how React works, how things can become dynamic... \
      Most things. Please provide me some feed back on email (see below).",
    },
    {
      id: 2,
      url: "https://www.temp.com",
      projectName: "Temp",
      projectDescription: "A temporary placeholder, since I do not have many projects at the moment.",
    },
    {
      id: 3,
      projectName: "Xledger Chat Bot",
      techStack: [TECH.UNDISCLOSED],
      projectDescription: "As a summer intern at Xledger Norge I worked on a project \
      where we built a chatbot as a help system and powered it through a GPT AI-modell. \
      The goal of this project was to create a tool for users to easily have their questions answered \
      through a chatbot, that could understand the semantics of their question."
    },
  ]

  const [currentDescription, setCurrentDescription] = useState(projects[0].projectDescription)
  const [currentTechStack, setcurrentTechStack] = useState(projects[0].techStack)

  function changeProject(project) {
    let newDescription = project.projectDescription;
    let url = project.url;
    (
      url ? setCurrentDescription(
        <>
          {newDescription}
          <br /><br />
          Link: <a href={url}>{url}</a>
        </>
      )
        : setCurrentDescription(newDescription)
    );
    project.techStack ? setcurrentTechStack(project.techStack)
      : setcurrentTechStack([""]);
  }

  return (
    <div className="projects-container p-4">
      <div id="project-info-container">
        <div className="description-container">
          <h2>Project information</h2>
          <p id="project-description">
            {currentDescription}
          </p>
        </div>
        <div id="other-container">
          <h3>Tech stack</h3>
          <ul>
            {currentTechStack.map((item, index) => (
              <li key={index}>
                {getTechImage(item)}
                {/* {item.name} */}
                </li>
            ))}
          </ul>
        </div>
      </div>
      <ProjectList
        projects={projects}
        changeProject={changeProject}></ProjectList>
    </div>
  );
}