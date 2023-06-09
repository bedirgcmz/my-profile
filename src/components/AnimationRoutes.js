import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "./AboutMe";
import Education from "./Education";
import { AnimatePresence } from "framer-motion";
import WorkExperiance from "./WorkExperiance";
import SkillsHobbies from "./SkillsHobbies";
import MyProjects from "./MyProjects";

const AnimationRoutes = ({
  bacgroundOpc,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  color,
  borderLinkOpc,
}) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          element={
            <AboutMe
              borderTop={borderTop}
              borderBottom={borderBottom}
              borderLeft={borderLeft}
              borderRight={borderRight}
              color={color}
            />
          }
        />
        <Route
          exact
          path="/education"
          element={<Education color={color} bacgroundOpc={bacgroundOpc} />}
        />
        <Route
          exact
          path="/work-experience"
          element={<WorkExperiance color={color} bacgroundOpc={bacgroundOpc} />}
        />
        <Route
          exact
          path="/skills-hobbies"
          element={<SkillsHobbies bacgroundOpc={bacgroundOpc} color={color} />}
        />
        <Route
          exact
          path="/my-projects"
          element={
            <MyProjects bacgroundOpc={bacgroundOpc} color={color} borderLinkOpc={borderLinkOpc} />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
