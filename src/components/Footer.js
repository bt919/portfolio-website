import { useState } from "react";

const Footer = (props) => {
  const [text, changeText] = useState("Click for dawg");

  const handleClick = () => {
    changeText(
      text === "Click for dawg" ? "Click to remove dawg" : "Click for dawg"
    );
  };

  return (
    <footer
      onClick={() => {
        props.handler();
        handleClick();
      }}
    >
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
