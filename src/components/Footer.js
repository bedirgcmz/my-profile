import React from "react";

const Footer = ({ bacgroundDark, color }) => {
  return (
    <div
      className={`footer p-3 ${bacgroundDark} text-white d-flex justify-content-around align-items-center`}
    >
      <div className="social-media d-flex justify-content-around align-items-center ">
        <div className="my-number mb-2 d-flex align-items-center">
          <i className="fa-solid fa-mobile-screen-button me-2 "></i> <span>+46 76 963 73 90</span>
        </div>
        <div className="email d-flex align-items-center mb-2">
          <i className="fa-solid fa-envelope me-2 "></i>
          <span>bdrgcmz@gmail.com</span>
        </div>
        <div className="guthub d-flex align-items-center mb-2">
          <a
            className="text-white text-decoration-none social-m-link"
            href="https://github.com/bedirgcmz"
          >
            <i className="fa-brands fa-github me-2 "></i>
            Github
          </a>
        </div>
        <div className="linkedin d-flex align-items-center mb-2">
          <a
            className="text-white text-decoration-none social-m-link"
            href="https://www.linkedin.com/in/bedir-gocmez-1a3388229/"
          >
            <i className="fa-brands fa-linkedin me-2 "></i>
            Linkedin
          </a>
        </div>
      </div>
      <p className="text-center copyright">&copy; Copyright 2022 Bedir Gocmez</p>
    </div>
  );
};

export default Footer;
