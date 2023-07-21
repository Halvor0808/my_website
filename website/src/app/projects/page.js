import Project from "./project";

export default function Projects() {
    return (
      <div>
        <h2>Projects:</h2>
        <div>
          <ul>
            <Project ProjectLink="www.google.com" ProjectName="Google">Some text</Project>
            <Project ProjectLink="www.temp.com" ProjectName="temp">Even more text</Project>
            <Project ProjectLink="my.placeholder" ProjectName="placeholder"/>
          </ul>        
        </div>
      </div>
    );
  }