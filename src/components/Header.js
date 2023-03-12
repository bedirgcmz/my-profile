import React from "react";
import { Link } from "react-router-dom";
import profileImg from "./image/profile.jpg";

const Header = ({ bacgroundOpc, color, borderBottom, bacgroundDark }) => {
  return (
    <div
      className={`${bacgroundOpc} ${borderBottom} ${color} header d-flex flex-column justify-content-between px-5 w-100`}
    >
      <div className="img-info-slogan  d-flex justify-content-around align-items-center">
        <div className="img-container align-items-center d-flex mt-2">
          <img
            src={profileImg}
            className={`${bacgroundDark} profile-img rounded-circle me-3 p-1`}
            alt=""
            width={120}
          />
          <div className="info text-center">
            <h4 className="mb-1">Bedir Gocmez</h4>
            <p className="mb-0">junior Fullstack Web Developer</p>
          </div>
        </div>
        <p className="slogan">If you work hard, you will succeed!</p>
      </div>
      <div className="links d-flex justify-content-end align-items-center">
        <Link className={`${bacgroundDark}`} to="/">
          About Me
        </Link>
        <Link className={`${bacgroundDark}`} to="/skills-hobbies">
          Skills & Hobbies
        </Link>
        <Link className={`${bacgroundDark}`} to="/education">
          Education{" "}
        </Link>
        <Link className={`${bacgroundDark}`} to="/work-experience">
          Work Experience
        </Link>
      </div>
    </div>
  );
};

export default Header;
