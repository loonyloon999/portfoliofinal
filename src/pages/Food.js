import React from "react";
import "../App.css";
import StickyHeader from "../components/StickyHeader.js";
import { MdVolunteerActivism } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import foodForPortfolioFinal from "./foodForPortfolioFinal.png";

function Food() {
  return (
    <div className="App">
      <header className="information-page-content">
        <StickyHeader designerName={"loonyloon999"}></StickyHeader>
        <div
          style={{
            backgroundColor: "#FAEEFF",
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
            Food Finder Mobile App - Pro Bono
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
            A mobile application that allows users to find restaurants in a
            given area
          </h2>
          <img
            src={foodForPortfolioFinal}
            alt="logo"
            className="project-image"
            style={{ width: "270px", height: "520px", paddingTop: 25 }}
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
            I created an application that allows user to find a given type of
            food in a given area. For instance, a user can search for Italian
            food in New Haven, like in the example. The application pulls data
            from the YELP API. Then, it sorts the matching restaurant data by
            cost. Lastly, users can view the restaurant in the Maps application
            on an iPhone.
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
            <FaMobile
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
                marginRight: "8%",
                marginLeft: "10%",
              }}
            >
              Mobile
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
            href="https://camo.githubusercontent.com/88b76f39617f79419bd7ea6f50264e7f4f19ddcc0e8cdd61a3817acdf484f29d/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f51353056553057774a465863526f70716c762f67697068792e676966"
            target="_blank"
          >
            <button className="button1">
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
            I learned about how to use React Native and how to use REST commands
            to access, sort, and display data from an API. In addition, in the
            future, I imagine I may reuse the search bar component I created.
            I’m excited to make more mobile applications in the future!
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

export default Food;
