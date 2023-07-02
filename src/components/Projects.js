import Project from "./Project";
import battleshipImage from "../images/battleship.png";

const Projects = () => {
  return (
    <main className="projects">
      <Project
        title="Battleship"
        imageUrl={battleshipImage}
        description="Made using plain JavaScript. One of the key
        goals in this project was to practice separating the UI from
        the game's logic."
        projectUrl=""
        demoUrl=""
      ></Project>

      <Project
        title="Battleship"
        imageUrl={battleshipImage}
        description="Made using plain JavaScript. One of the key
        goals in this project was to practice separating the UI from
        the game's logic."
        projectUrl=""
        demoUrl=""
      ></Project>

      <Project
        title="Battleship"
        imageUrl={battleshipImage}
        description="Made using plain JavaScript. One of the key
        goals in this project was to practice separating the UI from
        the game's logic."
        projectUrl=""
        demoUrl=""
      ></Project>

      <Project
        title="Battleship"
        imageUrl={battleshipImage}
        description="Made using plain JavaScript. One of the key
        goals in this project was to practice separating the UI from
        the game's logic."
        projectUrl=""
        demoUrl=""
      ></Project>
    </main>
  );
};

export default Projects;
