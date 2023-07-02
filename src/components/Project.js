import Icon from "@mdi/react";
import { mdiLink } from "@mdi/js";

const Project = (props) => {
  /* expects a title, imageUrl, description, projectUrl, and demoUrl via props */
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <img alt="screencap of project" src={props.imageUrl} />
      <p>{props.description}</p>
      <div className="links">
        <a
          href={props.projectUrl}
          alt="open's a new github tab to this project's source code"
          target="_blank"
        >
          <i className="devicon-github-original"></i>
        </a>
        <a href={props.demoUrl} alt="opens a new tab of this project's demo">
          <Icon path={mdiLink} size={1} />
        </a>
      </div>
    </div>
  );
};

export default Project;
