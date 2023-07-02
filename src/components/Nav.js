import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive, isPending }) => {
          return isActive ? "active" : "";
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive, isPending }) => {
          return isActive ? "active" : "";
        }}
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) => {
          return isActive ? "active" : "";
        }}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Nav;
