// ErrorComponent.js - New component for displaying errors
import React from "react";

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className="ErrorComponent">
      <h2>{errorMessage}</h2>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorComponent;
