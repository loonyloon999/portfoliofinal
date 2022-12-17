import React from "react";
import "../App.css";
import StickyHeader from "../components/StickyHeader.js";
import { MdVolunteerActivism } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import iterativeDesignForPortfolio from "./iterativeDesignForPortfolio.png";

function IterativeDesign() {
  return (
    <div className="App">
      <header className="information-page-content">
        <StickyHeader designerName={"loonyloon999"}></StickyHeader>
        <div
          style={{
            backgroundColor: "#DDFBFF",
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
            Iterative Design - Pro Bono
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
            An iterative redesign of Airhart Aeronautics' website
          </h2>
          <img
            src={iterativeDesignForPortfolio}
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
            I developed an interactive interface for an emerging startup. I
            worked on this interface with three other team members. First, we
            sketched ideas for the interface, then we created an interactive,
            high-fidelity prototype, next we conducted user testing on a final,
            revised prototype, and finally we contacted the start up with our
            final product.
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
            {/* <FaLaptopCode
              size={90}
              style={{
                color: "black",
                marginRight: "10%",
                marginLeft: "10%",
              }}
            /> */}
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
                marginLeft: "9%",
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
            {/* <p
              style={{
                marginRight: "10%",
                marginLeft: "10%",
              }}
            >
              Programming
            </p> */}
          </div>

          <a
            href="https://www.figma.com/file/778BoUNWk3eF51pGPrQzEz/Airhart-Aeronautics?node-id=0%3A1"
            target="_blank"
          >
            <button className="button1">
              <p>View Figma</p>
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
              fontSize: "30px",
              marginLeft: 160,
              marginRight: 160,
              textAlign: "left",
            }}
          >
            I learned a lot about the iterative design process. Design is not a
            finite process, nor is it individual. I learned that it’s important
            to seek feedback from various people at various moments. In the
            future, I will always be seeking feedback at various stages of my
            design projects.
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

export default IterativeDesign;
