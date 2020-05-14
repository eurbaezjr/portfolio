import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Contact from "./pages/Contact"

function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/portfolio" component={About} />
          <Route exact path="/portfolio/about" component={About} />
          <Route exact path="/portfolio/projects" component={Projects} />
          <Route exact path="/portfolio/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
