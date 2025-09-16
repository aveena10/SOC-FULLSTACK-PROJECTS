import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import "./styles.css";
// import Nav from "./components/nav";
// import Head, { Foot } from "./components/base";

function FF() {
  return (
    <BrowserRouter>
 <head/>
      <h1>My Blog</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 Page Not Found 🚫</h2>} />
      </Routes>
     <footer/>
    </BrowserRouter>
  );
}

export default FF;
