import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
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
          <Route exact path="/" component={Experience} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
