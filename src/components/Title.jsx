import React from "react";
import "../styles/Title.css";

function Title({ subTitle, Title }) {
  return (
    <div className="Title">
      <p>{subTitle}</p>
      <h2>{Title}</h2>
    </div>
  );
}

export default Title;
