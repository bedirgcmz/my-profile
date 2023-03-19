import React from "react";
import { motion } from "framer-motion";

const AboutMe = ({ borderTop, borderBottom, borderLeft, borderRight, color }) => {
  const variants2 = {
    fadeIn: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    fadeOut: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="about-me w-75 mx-auto"
      variants={variants2}
      initial="fadeIn"
      animate="inactive"
      exit="fadeOut"
    >
      <h2 className={`${color}`}>
        <span>About Me</span> <i className="fa-regular fa-address-card ms-3"></i>
      </h2>
      <div id="about-me-info-container">
        <div id="border-left" className={`${borderLeft} ${borderBottom}`}></div>
        <div id="border-right" className={`${borderRight} ${borderTop}`}></div>
        <img
          src="https://www.pngplay.com/wp-content/uploads/13/Programmer-PNG-Images-HD.png"
          alt=""
        />
        <p className={`${color} about-me-text`}>
          {/* <b>I am an ambitious Developer with a passion for software and technology.</b> I have
          completed a 11-month <b>"Full Stack Web Development"</b> course. Through focused study I
          have reached the level of Junior Full Stack Web Programmer. A few months ago, I developed
          web-based applications using my newly acquired skills and I can develop in front-end and
          back-end disciplines. I am very keen to learn new technologies and especially artificial
          intelligence. <em>I count myself as very flexible and agile in teamwork.</em> */}
          <b>I am an ambitious Developer with a passion for software and technology. </b>I have been
          developing myself in the IT field for 2 years. I continued to learn on many platforms and
          learned different software languages. I also completed the
          <b>"Full Stack Web Development"</b> course on a course. Through focused work, I have
          reached the Junior Full Stack Web Programmer level. A few years ago, I developed web-based
          applications with my newly acquired skills and I can develop in front-end and back-end
          disciplines. I am very eager to learn new technologies and especially artificial
          intelligence. <em>I think I am very flexible and agile in teamwork.</em>
        </p>
      </div>
      <hr className="w-100" />
      <div className="languages mt-4 ">
        <h2 className={`${color} mb-3 text-start`}>
          <span>Languages</span> <i className="fa-solid fa-language ms-3"></i>
        </h2>
        <div className="progress">
          <div
            className="progress-bar english"
            role="progressbar"
            aria-label="Danger example"
            style={{ width: "30%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            English
          </div>
        </div>
        <div className="progress">
          <div
            className="progress-bar swedish"
            role="progressbar"
            aria-label="Warning example"
            style={{ width: "25%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Swedish
          </div>
        </div>
        <div className="progress">
          <div
            className="progress-bar turkish"
            role="progressbar"
            aria-label="Info example"
            style={{ width: "100%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Turkish
          </div>
        </div>
        <div className="progress">
          <div
            className="progress-bar kurdish"
            role="progressbar"
            aria-label="Success example"
            style={{ width: "100%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Kurdis
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
