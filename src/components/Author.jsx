import React from "react";
import manoj from "../imgs/ManojBhat.jpg";
import git from "../imgs/git.svg";
import lnkIn from "../imgs/linkedin.svg";
import so from "../imgs/stack-overflow.svg";

const Author = () => {
  return (
    <div className="author">
      <img src={manoj} alt="Manoj Bhat" className="author-img" />
      <div className="details">
        <h4>Manoj Bhat</h4>
        <p>Software engineer, Math and Physics enthusiast</p>
        <div className="icons">
          <a
            href="https://github.com/Sigkill32"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="Github" />
          </a>
          <a
            href="https://stackoverflow.com/users/12893110/manoj-bhat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={so} alt="Stack overflow" />
          </a>
          <a
            href="https://www.linkedin.com/in/manoj-bhat-an/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={lnkIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Author;
