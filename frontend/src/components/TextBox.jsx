// TextBox.js - New component for displaying API data
import React from "react";

const TextBox = ({ apiData }) => {
  // Render the API data in a text box or any desired format
  return (
    <div className="TextBox">
      <h2>API Data:</h2>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
};

export default TextBox;
