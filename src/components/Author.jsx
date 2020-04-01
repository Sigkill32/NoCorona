import React from "react";
import manoj from "../imgs/ManojBhat.jpg";

const Author = () => {
  return (
    <div className="author">
      <img src={manoj} alt="Manoj Bhat" />
      <div className="details">
        <h4>Manoj Bhat</h4>
        <p>Software engineer, Math and physics enthusiast</p>
      </div>
    </div>
  );
};

export default Author;
