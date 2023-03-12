import React from "react";
import { motion } from "framer-motion";

const Education = ({ bacgroundOpc, color }) => {
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
      className="education w-75 mx-auto mt-4 row"
      variants={variants2}
      initial="fadeIn"
      animate="inactive"
      exit="fadeOut"
    >
      <h2 className={`${color} mb-4`}>
        Educations <i className="fas fa-user-graduate ps-3"></i>
      </h2>
      <div className={`${color} education-card col-md-6 col-sm-12 mb-4 position-relative`}>
        <i className="fa-solid fa-thumbtack fs-4 position-absolute"></i>
        <div className="card">
          <h5 className="card-header">
            <i className="fa-solid fa-building pe-3"></i> HiCoders
          </h5>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">
              <i className="fa-solid fa-laptop-code pe-3"></i>Full Stack Web Developer
            </h5>
            <p className="card-text">
              I had an enjoyable education process that lasted 11 months. I learned a lot from this
              training.
            </p>
            <span className={`${bacgroundOpc} date py-1 px-2`}>14.08.2021 - 02.07.2022</span>
          </div>
        </div>
      </div>
      <div className={`${color} education-card col-md-6 col-sm-12 mb-4 position-relative`}>
        <i className="fa-solid fa-thumbtack fs-4 position-absolute"></i>
        <div className="card">
          <h5 className="card-header">
            <i className="fa-solid fa-building pe-3"></i> Kariyer Dunyasi
          </h5>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">
              <i className="fa-solid fa-people-group pe-3"></i>Student Coaching
            </h5>
            <p className="card-text">
              Online education, Distance course tracking, Online exams and international
              certificates
            </p>
            <span className={`${bacgroundOpc} date py-1 px-2`}>12.10.2018 - 15.12.2018</span>
          </div>
        </div>
      </div>
      <div className={`${color} education-card col-md-6 col-sm-12 mb-4 position-relative`}>
        <i className="fa-solid fa-thumbtack fs-4 position-absolute"></i>
        <div className="card">
          <h5 className="card-header">
            <i className="fa-solid fa-building pe-3"></i> Canakkale Onsekiz Mart Unv.
          </h5>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">
              <i className="fa-solid fa-person-chalkboard pe-3"></i>Primary School Graduate
            </h5>
            <p className="card-text">
              I received 2 years of postgraduate education. I completed my thesis research on "The
              effect of the debate technique in the primary school 4th-grade social sciences course
              on the coursesuccess and critical thinking".
            </p>
            <span className={`${bacgroundOpc} date py-1 px-2`}>15.09.2014 - 23.07.2016</span>
          </div>
        </div>
      </div>
      <div className={`${color} education-card col-md-6 col-sm-12 mb-4 position-relative`}>
        <i className="fa-solid fa-thumbtack fs-4 position-absolute"></i>
        <div className="card">
          <h5 className="card-header">
            <i className="fa-solid fa-building pe-3"></i> Canakkale Onsekiz Mart Unv.
          </h5>
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">
              <i className="fa-solid fa-person-chalkboard pe-3"></i>Primary School Graduate
              Education
            </h5>
            <p className="card-text">
              I have successfully completed my 4-year undergraduate education.
            </p>
            <span className={`${bacgroundOpc} date py-1 px-2`}>15.09.2014 - 23.07.2016</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
