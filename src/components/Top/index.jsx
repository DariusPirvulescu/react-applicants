import React from "react";
import "./Top.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Top = () => {
  return (
    <div className="top">
      <ArrowBackIcon className="arrow" />
      <h2>Applicants</h2>
    </div>
  );
};

export default Top;
