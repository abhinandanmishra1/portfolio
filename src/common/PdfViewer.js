import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export function PdfViewer(props) {
  const { pdf } = props;

  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        renderTextLayer="canvas"
        renderMode="svg"
        className="pdf-container h-full"
      >
        <Page pageNumber={1} className="pdf-page"/>
      </Document>
    </>
  );
}
