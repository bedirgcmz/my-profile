import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "./image/profile.jpg";

const Header = ({ bacgroundOpc, borderLinkOpc, color, borderBottom, bacgroundDark }) => {
  const [locationAboutMe, setLocationAboutMe] = useState("d-inline");
  const [locationMyProject, setLocationMyProject] = useState("d-none");
  const [locationSkills, setLocationSkills] = useState("d-none");
  const [locationWorkExp, setLocationWorkExp] = useState("d-none");
  const [locationEdu, setLocationEdu] = useState("d-none");

  const showLocAbout = () => {
    setLocationAboutMe("d-inline");
    setLocationMyProject("d-none");
    setLocationSkills("d-none");
    setLocationWorkExp("d-none");
    setLocationEdu("d-none");
  };
  const showLocProjct = () => {
    setLocationAboutMe("d-none");
    setLocationMyProject("d-inline");
    setLocationSkills("d-none");
    setLocationWorkExp("d-none");
    setLocationEdu("d-none");
  };
  const showLocSkills = () => {
    setLocationAboutMe("d-none");
    setLocationMyProject("d-none");
    setLocationSkills("d-inline");
    setLocationWorkExp("d-none");
    setLocationEdu("d-none");
  };
  const showLocWork = () => {
    setLocationAboutMe("d-none");
    setLocationMyProject("d-none");
    setLocationSkills("d-none");
    setLocationWorkExp("d-inline");
    setLocationEdu("d-none");
  };
  const showLocEdu = () => {
    setLocationAboutMe("d-none");
    setLocationMyProject("d-none");
    setLocationSkills("d-none");
    setLocationWorkExp("d-none");
    setLocationEdu("d-inline");
  };

  return (
    <div className={`  ${color} header d-flex flex-column justify-content-between px-5 w-100`}>
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
        <Link className={`${borderLinkOpc} ${color}`} to="/" onClick={(e) => showLocAbout(e)}>
          About Me <i className={`fa-solid fa-location-dot ms-1 ${locationAboutMe}`}></i>
        </Link>
        <Link
          className={`${borderLinkOpc} ${color}`}
          to="/my-projects"
          onClick={(e) => showLocProjct(e)}
        >
          My Projects <i className={`fa-solid fa-location-dot ms-1 ${locationMyProject}`}></i>
        </Link>
        <Link
          activeClassName="is-active"
          className={`${borderLinkOpc} ${color}`}
          to="/skills-hobbies"
          onClick={(e) => showLocSkills(e)}
        >
          Skills & Hobbies <i className={`fa-solid fa-location-dot ms-1 ${locationSkills}`}></i>
        </Link>
        <Link
          className={`${borderLinkOpc} ${color}`}
          to="/education"
          onClick={(e) => showLocEdu(e)}
        >
          Education <i className={`fa-solid fa-location-dot ms-1 ${locationEdu}`}></i>
        </Link>
        <Link
          className={`${borderLinkOpc} ${color}`}
          to="/work-experience"
          onClick={(e) => showLocWork(e)}
        >
          Work Experience <i className={`fa-solid fa-location-dot ms-1 ${locationWorkExp}`}></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
