import React from "react";
import "../App.css";
import StickyHeader from "../components/StickyHeader.js";
import responsiveRedesignForPortfolio from "./responsiveRedesignForPortfolio.png";
import { MdVolunteerActivism } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function ResponsiveRedesign() {
  return (
    <div className="App">
      <header className="information-page-content">
        <StickyHeader designerName={"loonyloon999"}></StickyHeader>
        <div
          style={{
            backgroundColor: "#eee8aa",
            width: "100%",
            marginTop: "0px",
          }}
        >
          <h1
            style={{
              paddingTop: "130px",
              color: "black",
              fontWeight: "700",
              fontSize: "46px",
              fontFamily: "Titillium Web",
            }}
          >
            Responsive Redesign - Pro Bono
          </h1>
          <h2
            style={{
              color: "black",
              fontWeight: "200",
              fontSize: "20px",
              paddingTop: 20,
              fontFamily: "Titillium Web",
            }}
          >
            Redesigning a Poorly Designed Website
          </h2>
          <img
            src={responsiveRedesignForPortfolio}
            alt="logo"
            className="project-image"
            style={{ width: "525px", height: "410px", paddingTop: 25 }}
          />
        </div>
        <div>
          <h1
            style={{
              marginTop: "100px",
              color: "black",
              textAlign: "left",
              marginLeft: 160,
              fontFamily: "Titillium Web",
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            Context and Purpose
          </h1>
          <p
            style={{
              fontFamily: "Titillium Web",
              fontSize: "20px",
              marginLeft: 160,
              marginRight: 160,
              textAlign: "left",
            }}
          >
            I redesigned the website home page for the James Bond Museum in
            Sweden. First, I identified the main issues with the page. I found
            that usability, learnability, and the conceptual model were major
            issues for the site. Then, I created low-fidelity and high fidelity
            wireframes for laptop, tablet, and mobile.{" "}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
            <MdVolunteerActivism
              size={55}
              style={{
                color: "black",
                marginRight: "10%",
                marginLeft: "10%",
              }}
            />
            <FaPaintBrush
              size={55}
              style={{
                color: "black",
                marginRight: "10%",
                marginLeft: "10%",
              }}
            />
            <FaLaptopCode
              size={55}
              style={{
                color: "black",
                marginRight: "10%",
                marginLeft: "10%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            <p
              style={{
                marginRight: "10%",
                marginLeft: "10%",
              }}
            >
              Pro-Bono
            </p>
            <p
              style={{
                marginRight: "10%",
                marginLeft: "10%",
              }}
            >
              Design
            </p>
            <p
              style={{
                marginRight: "10%",
                marginLeft: "10%",
              }}
            >
              Programming
            </p>
          </div>
          <a
            href="https://loonyloon999.github.io/ResponsiveRedesignPortfolio/"
            target="_blank"
          >
            <button onClick={() => {}} className="button1">
              <p>View Project</p>
            </button>
          </a>
        </div>
        <div>
          <h1
            style={{
              marginTop: "70px",
              color: "black",
              fontFamily: "Titillium Web",
              fontWeight: "600",
              textAlign: "left",
              marginLeft: 160,
              fontSize: "30px",
            }}
          >
            Interesting Lessons Learned
          </h1>
          <p
            style={{
              fontFamily: "Titillium Web",
              fontSize: "20px",
              marginLeft: 160,
              marginRight: 160,
              textAlign: "left",
            }}
          >
            My major takeaway for this project was the major issues with
            accessibility I found through looking over the original site with
            WebAIM. There were 350 instances of missing alternative text! For
            blind individuals using a screen reader, they would not be able to
            understand what the image is about. In the future, I will be sure to
            make my websites with accessibility in mind.{" "}
          </p>
        </div>
        {/* //footer */}
        <div className="footer">
          <h1
            style={{
              fontFamily: "Titillium Web",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            Let's Connect!
          </h1>
          <p style={{ fontFamily: "Titillium Web", fontSize: "15px" }}>
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
              marginTop: "50px",
            }}
          >
            ® Created by loonyloon999
          </p>
        </div>
      </header>
    </div>
  );
}

export default ResponsiveRedesign;
