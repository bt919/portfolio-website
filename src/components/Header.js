import Icon from "@mdi/react";
import { mdiThemeLightDark } from "@mdi/js";
import { useState } from "react";

const Header = (props) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("darkmode");
  };

  return (
    <header>
      <h1>{props.fname + " " + props.lname}</h1>
      <a
        href="https://github.com/bt919"
        alt="github profile page"
        target="_blank"
      >
        <i className="devicon-github-original"></i>
      </a>
      <a
        href="https://linkedin.com/in/barthan-thirunavukarasu-40bbaa277"
        alt="linkedin profile page"
        target="_blank"
      >
        <i className="devicon-linkedin-plain"></i>
      </a>
      <Icon path={mdiThemeLightDark} size={1} onClick={toggleTheme} />
    </header>
  );
};

export default Header;
