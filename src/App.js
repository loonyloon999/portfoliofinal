import logo from "./logo.svg";
import "./App.css";
import StickyHeader from "./components/StickyHeader.js";
import ProjectBox from "./components/ProjectBox.js";
import developmentForPortfolio from "./developmentForPortfolio.png";
import responsiveRedesignForPortfolio from "./responsiveRedesignForPortfolio.png";
import iterativeDesignForPortfolio from "./iterativeDesignForPortfolio.png";
import foodForPortfolioFinal from "./foodForPortfolioFinal.png";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Home from "./pages/Home";
import Development from "./pages/Development";
import ResponsiveRedesign from "./pages/ResponsiveRedesign";
import IterativeDesign from "./pages/IterativeDesign";
import Food from "./pages/Food";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//comment test
function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/development" element={<Development />} />
          <Route path="/responsiveredesign" element={<ResponsiveRedesign />} />
          <Route path="/iterativedesign" element={<IterativeDesign />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
