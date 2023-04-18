import React from "react";
import PDFViewer from "pdf-viewer-reactjs";
import cv from "../file/cv.pdf";

const PdfCv = () => {
  return (
    <PDFViewer
      document={{
        url: { cv },
      }}
    />
  );
};

export default PdfCv;
