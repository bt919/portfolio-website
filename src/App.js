import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header fname="Franky" lname="Corby"></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
