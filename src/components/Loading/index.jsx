import React from "react";
import "./Loading.scss";
import { StageSpinner } from "react-spinners-kit";

const Loading = () => {
  return (
    <div className="loading">
      <StageSpinner size={50} color="#FEB91F" className="spinner" />
      <h3>Fetching results...</h3>
    </div>
  );
};

export default Loading;
