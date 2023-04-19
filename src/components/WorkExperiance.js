import React from "react";
import { motion } from "framer-motion";

const WorkExperiance = ({ bacgroundOpc, color }) => {
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

  const experiences = [
    {
      jod_title: "Frontend Developer ",
      company: "Freelance",
      info: "Coding, design, design, page management, using react, Using npm package, writing html css bootstrap javascript code..",
      date: "07.2022 - Currently",
      icon: "fa-solid fa-code pe-3",
    },
    {
      jod_title: "Student Coaching",
      company: "MEM Educational Institutions",
      info: "Student coaching, motivation, guidance, preparing a study program, homework follow-up, seminar, coordination, family visits..",
      date: "08.2018 - 09.2020",
      icon: "fa-solid fa-person-walking-arrow-right pe-3",
    },
    {
      jod_title: "Primary School Teaching",
      company: "Toros Primary School",
      info: "Classroom management, lecture, student follow-up, homework follow-up, teaching literacy, family visits..",
      date: "09.2014 - 07.2016",
      icon: "fa-solid fa-person-chalkboard pe-3",
    },
    {
      jod_title: "Primary School Teaching",
      company: "Gokkusagi Primary School",
      info: "Classroom management, lecture, student follow-up, homework follow-up, teaching literacy, family visits..",
      date: "09.2011 - 07.2014",
      icon: "fa-solid fa-person-chalkboard pe-3",
    },
  ];
  return (
    <motion.div
      className="work-experience w-75 mx-auto mt-4 row"
      variants={variants2}
      initial="fadeIn"
      animate="inactive"
      exit="fadeOut"
    >
      <h2 className={`${color} mb-4`}>
        Work Experience <i className="fa-solid fa-user-gear ps-3"></i>
      </h2>
      {/* <div className={`${color} work-experience-card col-md-6 col-sm-12 mb-4 position-relative`}>
        <i className="fa-solid fa-thumbtack fs-4 position-absolute"></i>
        <div className="card">
          <h5 className="card-header">
            <i className="fa-solid fa-building pe-3"></i> MEM Educational Institutions
          </h5>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">
              <i className="fa-solid fa-people-group pe-3"></i>Student Coaching
            </h5>
            <p className="card-text">
              Student coaching, motivation, guidance, preparing a study program, homework follow-up,
              seminar, coordination, family visits..
            </p>
            <span className={`${bacgroundOpc} date py-1 px-2`}>08.2018 - 09.2020</span>
          </div>
        </div>
      </div>
      <div className={`${color} work-experience-card col-md-6 col-sm-12 mb-4 position-relative`}>
        <i className="fa-solid fa-thumbtack fs-4 position-absolute"></i>
        <div className="card">
          <h5 className="card-header">
            <i className="fa-solid fa-building pe-3"></i> Toros Primary School
          </h5>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">
              <i className="fa-solid fa-school pe-3"></i>Primary School Teaching
            </h5>
            <p className="card-text">
              Classroom management, lecture, student follow-up, homework follow-up, teaching
              literacy, family visits..
            </p>
            <span className={`${bacgroundOpc} date py-1 px-2`}>09.2014 - 07.2016</span>
          </div>
        </div>
      </div>
      <div className={`${color} work-experience-card col-md-6 col-sm-12 mb-4 position-relative`}>
        <i className="fa-solid fa-thumbtack fs-4 position-absolute"></i>
        <div className="card">
          <h5 className="card-header">
            <i className="fa-solid fa-building pe-3"></i> Gokkusagi Primary School
          </h5>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">
              <i className="fa-solid fa-school pe-3"></i>Primary School Teaching
            </h5>
            <p className="card-text">
              Classroom management, lecture, student follow-up, homework follow-up, teaching
              literacy, family visits..
            </p>
            <span className={`${bacgroundOpc} date py-1 px-2`}>09.2011 - 07.2014</span>
          </div>
        </div>
      </div> */}
      {experiences.map((experience) => (
        <div className={`${color} work-experience-card col-md-6 col-sm-12 mb-4 position-relative`}>
          <i className="fa-solid fa-thumbtack fs-4 position-absolute"></i>
          <div className="card">
            <h5 className="card-header">
              <i className="fa-solid fa-building pe-3"></i> {experience.company}
            </h5>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">
                <i className={`fa-solid ${experience.icon} pe-3`}></i>
                {experience.jod_title}
              </h5>
              <p className="card-text">{experience.info}</p>
              <span className={`${bacgroundOpc} date py-1 px-2`}>{experience.date}</span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default WorkExperiance;
