import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AnimationRoutes from "./components/AnimationRoutes";
import "./App.css";
import Footer from "./components/Footer";
import countapi from "countapi-js";
// import cv from "../src/file/cv.pdf";
// import PdfCv from "./components/PdfCv";

export default function App() {
  const [colorButton, setColorButton] = useState(true);
  const [bacgroundOpc, setBackgroundOpc] = useState("bg-opc-dark-brown");
  const [borderLinkOpc, setBorderLinkOpc] = useState("br-link-opc-brown");
  const [bacgroundDark, setBackgroundDark] = useState("bg-dark-brown");
  const [color, setColor] = useState("cl-dark-brown");
  const [borderBottom, setBorderBottom] = useState("br-btm-dark-brown");
  const [borderTop, setBorderTop] = useState("br-top-dark-brown");
  const [borderLeft, setBorderLeft] = useState("br-left-dark-brown");
  const [borderRight, setBorderRight] = useState("br-right-dark-brown");

  const [visitorNumber, setVisitorNumber] = useState("");

  useEffect(() => {
    countapi.visits().then((result) => {
      console.log(result.value);
      setVisitorNumber(result.value);
    });
  }, []);

  const getColor = () => {
    if (colorButton) {
      setColorButton(false);
    } else {
      setColorButton(true);
    }
  };
  const getColorBlue = () => {
    setBackgroundOpc("bg-opc-dark-blue");
    setBorderLinkOpc("br-link-opc-blue");
    setBackgroundDark("bg-dark-blue");
    setColor("cl-dark-blue");
    setBorderBottom("br-btm-dark-blue");
    setBorderTop("br-top-dark-blue");
    setBorderLeft("br-left-dark-blue");
    setBorderRight("br-right-dark-blue");
  };

  const getColorBrown = () => {
    setBackgroundOpc("bg-opc-dark-brown");
    setBorderLinkOpc("br-link-opc-brown");
    setBackgroundDark("bg-dark-brown");
    setColor("cl-dark-brown");
    setBorderBottom("br-btm-dark-brown");
    setBorderTop("br-top-dark-brown");
    setBorderLeft("br-left-dark-brown");
    setBorderRight("br-right-dark-brown");
  };

  const getColorOrange = () => {
    setBackgroundOpc("bg-opc-dark-orange");
    setBorderLinkOpc("br-link-opc-orange");
    setBackgroundDark("bg-dark-orange");
    setColor("cl-dark-orange");
    setBorderBottom("br-btm-dark-orange");
    setBorderTop("br-top-dark-orange");
    setBorderLeft("br-left-dark-orange");
    setBorderRight("br-right-dark-orange");
  };

  const getColorPurple = () => {
    setBackgroundOpc("bg-opc-dark-purple");
    setBorderLinkOpc("br-link-opc-purple");
    setBackgroundDark("bg-dark-purple");
    setColor("cl-dark-purple");
    setBorderBottom("br-btm-dark-purple");
    setBorderTop("br-top-dark-purple");
    setBorderLeft("br-left-dark-purple");
    setBorderRight("br-right-dark-purple");
  };
  return (
    <div className="bg">
      <Router>
        <Header
          bacgroundOpc={bacgroundOpc}
          borderLinkOpc={borderLinkOpc}
          color={color}
          borderBottom={borderBottom}
          bacgroundDark={bacgroundDark}
        />
        <AnimationRoutes
          bacgroundOpc={bacgroundOpc}
          borderTop={borderTop}
          borderBottom={borderBottom}
          borderLeft={borderLeft}
          borderRight={borderRight}
          color={color}
          borderLinkOpc={borderLinkOpc}
        />
      </Router>
      <div className="color-change-container">
        <p>
          <button
            onClick={getColor}
            className={`${bacgroundDark} text-white btn`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            {!colorButton && <i className="fa-solid fa-angles-left"></i>}
            {colorButton && <i className="fa-solid fa-angles-right"></i>}
          </button>
        </p>
        <div style={{ minHeight: "120px" }}>
          <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="card card-body p-2">
              <span onClick={getColorBlue} className="color-box box-blue"></span> <br />
              <span onClick={getColorBrown} className="color-box box-brown"></span> <br />
              <span onClick={getColorOrange} className="color-box box-orange"></span> <br />
              <span onClick={getColorPurple} className="color-box box-purple"></span> <br />
            </div>
          </div>
        </div>
      </div>
      <div id="visitor" className={`${bacgroundOpc}`}>
        <p id="visitor-text" className="mb-0">
          Views Counter
        </p>
        <span id="visitor-number">{visitorNumber && visitorNumber}</span>
      </div>
      <Footer color={color} bacgroundDark={bacgroundDark} />
    </div>
  );
}
