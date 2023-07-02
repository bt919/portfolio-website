import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [ticked, setTicked] = useState(false);

  const handleClick = () => {
    setTicked(!ticked);
  };

  return (
    <div className={`App ${ticked === true ? "ticked" : ""}`}>
      <HashRouter>
        <Header fname="Franky" lname="Corby"></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer handler={handleClick}></Footer>
      </HashRouter>
    </div>
  );
}

export default App;
