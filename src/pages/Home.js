import "../App.css";
import StickyHeader from "../components/StickyHeader.js";
import ProjectBox from "../components/ProjectBox.js";
import developmentForPortfolio from "./developmentForPortfolio.png";
import responsiveRedesignForPortfolio from "./responsiveRedesignForPortfolio.png";
import iterativeDesignForPortfolio from "./iterativeDesignForPortfolio.png";
import foodForPortfolioFinal from "./foodForPortfolioFinal.png";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <div className="App">
      <header className="page-content">
        <StickyHeader designerName={"loonyloon999"}></StickyHeader>
        <div className="welcome-text">
          <h1 className="header-text">Hello, I'm loonyloon999</h1>
          <p className="sub-text">
            I'm a front-end software engineer who enjoys pro-bono work.
          </p>
          <p className="sub-text">
            Before that, I lived at Loon Lake in Oregon where I caught fish for
            my friends.
          </p>
          <p className="sub-text">
            In my free time, you can find me swimming underwater, coming ashore
            to nest, or doing my famous loon call.
          </p>
          <p className="sub-text">
            Check out my projects and feel free to send me a message at
            loonyloon999@loon.com
          </p>
        </div>
        <div className="project-box-layout">
          <ProjectBox
            backgroundC={"#eee8aa"}
            title={"Responsive Redesign"}
            type={"Pro Bono Project"}
            description={"A redesign of the 007 Museum's website"}
            image={responsiveRedesignForPortfolio}
            isLaptop={true}
            page={"responsiveredesign"}
          />
          <ProjectBox
            backgroundC={"#DDFBFF"}
            title={"Iterative Design"}
            type={"Pro Bono Project"}
            description={
              "An iterative redesign of Airhart Aeronautics' website"
            }
            image={iterativeDesignForPortfolio}
            isLaptop={true}
            page={"iterativedesign"}
          />
          <ProjectBox
            backgroundC={"#9FFF8E"}
            title={"Development"}
            type={"Pro Bono Project"}
            description={
              "A website that allows users to collect rare jerseys and estimate the cost"
            }
            image={developmentForPortfolio}
            isLaptop={true}
            page={"development"}
          />
          <ProjectBox
            backgroundC={"#FAEEFF"}
            title={"Food Finder Application"}
            type={"Pro Bono Project"}
            description={
              "An iterative redesign of Airhart Aeronautics' website"
            }
            image={foodForPortfolioFinal}
            isLaptop={false}
            page={"food"}
          />
        </div>
        <div className="footer">
          <h1
            style={{
              fontFamily: "Titillium Web",
              fontSize: "50px",
              fontWeight: "600",
            }}
          >
            Let's Connect!
          </h1>
          <p style={{ fontFamily: "Titillium Web", fontSize: "25px" }}>
            Give a loon call, or connect with me about my pro bono work on
            Github or Email.
          </p>
          <div className="connect-icons">
            <a
              href="https://github.com/loonyloon999?tab=repositories"
              target="_blank"
            >
              <AiFillGithub
                size={60}
                style={{ marginRight: "30px", color: "black" }}
              />
            </a>
            <a href="mailto:loonyloon999@loon.com" target="_blank">
              <MdEmail
                size={60}
                style={{ marginLeft: "30px", color: "black" }}
              />
            </a>
          </div>
          <p
            style={{
              fontFamily: "Titillium Web",
              fontSize: "22px",
              fontWeight: "200",
              marginTop: "100px",
            }}
          >
            ® Created by loonyloon999
          </p>
        </div>
      </header>
    </div>
  );
}
//mailto:no-reply@example.com

export default Home;
