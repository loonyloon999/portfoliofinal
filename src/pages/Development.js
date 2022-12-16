import React from "react";
import "../App.css";
import StickyHeader from "../components/StickyHeader.js";
import { MdVolunteerActivism } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import developmentForPortfolio from "./developmentForPortfolio.png";

function Development() {
  return (
    <div className="App">
      <header className="information-page-content">
        <StickyHeader designerName={"loonyloon999"}></StickyHeader>
        <div
          style={{
            backgroundColor: "#9FFF8E",
            width: "100%",
            marginTop: "0px",
          }}
        >
          <h1
            style={{
              paddingTop: "200px",
              color: "black",
              fontWeight: "700",
              fontSize: "70px",
              fontFamily: "Titillium Web",
            }}
          >
            Development - Pro Bono
          </h1>
          <h2
            style={{
              color: "black",
              fontWeight: "200",
              fontSize: "30px",
              paddingTop: 50,
              fontFamily: "Titillium Web",
            }}
          >
            A website that allows users to virtually collect rare sports jerseys
            and total the estimated cost
          </h2>
          <img
            src={developmentForPortfolio}
            alt="logo"
            className="project-image"
            style={{ width: "800px", height: "625px", paddingTop: 25 }}
          />
        </div>
        <div>
          <h1
            style={{
              marginTop: "100px",
              color: "black",
              textAlign: "left",
              marginLeft: 190,
              fontFamily: "Titillium Web",
              fontWeight: "600",
            }}
          >
            Context and Purpose
          </h1>
          <p
            style={{
              fontFamily: "Titillium Web",
              fontSize: "30px",
              marginLeft: 190,
              marginRight: 190,
              textAlign: "left",
            }}
          >
            I created a rare jersey collection website. My site includes four
            sport filters, four region filters, two popularity sorters, and a
            locker to store favorited jerseys. In addition, the site totals the
            estimated cost of the user’s favorited jerseys.
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
              size={90}
              style={{
                color: "black",
                marginRight: "10%",
                marginLeft: "10%",
              }}
            />
            {/* <FaPaintBrush
              size={90}
              style={{
                color: "black",
                marginRight: "10%",
                marginLeft: "10%",
              }}
            /> */}
            <FaLaptopCode
              size={90}
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
              fontSize: "25px",
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
            {/* <p
              style={{
                marginRight: "10%",
                marginLeft: "10%",
              }}
            >
              Design
            </p> */}
            <p
              style={{
                marginRight: "10%",
                marginLeft: "10%",
              }}
            >
              Programming
            </p>
          </div>

          <a href="https://loonyloon999.github.io/development/" target="_blank">
            <button className="button1">
              <p>View Project</p>
            </button>
          </a>
        </div>
        <div>
          <h1
            style={{
              marginTop: "100px",
              color: "black",
              fontFamily: "Titillium Web",
              fontWeight: "600",
              textAlign: "left",
              marginLeft: 190,
            }}
          >
            Interesting Lessons Learned
          </h1>
          <p
            style={{
              fontFamily: "Titillium Web",
              fontSize: "30px",
              marginLeft: 190,
              marginRight: 190,
              textAlign: "left",
            }}
          >
            I developed an interactive interface, used interface components, and
            tied the components to an internal data state. This was my first
            project working with react js, and I especially loved using
            components. My major takeaway is how much I learned about react.
            This is a major front-end language that I'm sure I will use in the
            future.
          </p>
        </div>
        {/* ----footer---- */}
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

export default Development;
