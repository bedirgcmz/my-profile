import React from "react";
import { motion } from "framer-motion";
import "./progress.css";

const SkillsHobbies = ({ bacgroundOpc, color }) => {
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
      variants={variants2}
      initial="fadeIn"
      animate="inactive"
      exit="fadeOut"
      className="skills-hobbies-container w-75 m-auto mt-4"
    >
      {/* col-md-4 col-lg-2 col-sm-6 col-xs-12 */}
      <div className="skills-container">
        <h2 className={`${color} mb-4`}>
          Skills <i className="fa-solid fa-user-gear ms-3"></i>
        </h2>
        <div className="dashboard row">
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name html`}>Html</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-1" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name css`}>Css</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-2" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name bootstrap`}>Bootstrap</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-3" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name javascript`}>Javascript</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-4" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name react`}>React</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-5" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          {/* 2. Duzenlemede eklenenler */}
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name react`}>Git</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-6" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name react`}>Github</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-7" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name react`}>MySql</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-8" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name react`}>Nodejs</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-9" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name react`}>Agile</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-10" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name react`}>Jira</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-11" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="hobbies-container">
        <h2 className={`${color} mb-4`}>
          Hobbies <i className="fas fa-thumbs-up ms-3"></i>
        </h2>
        <div className="dashboard row">
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name movie`}>W.Movie</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-30" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name food`}>To C.Food</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-31" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name book`}>R.Book</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-32" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 progress-container d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} ${color} skills-name travel`}>To Travel</span>
              <svg>
                <circle className="bgr" cx="49" cy="42" r="30" />
                <circle className="meter-33" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsHobbies;
