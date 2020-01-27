import React from "react";

import "./Portfolio.css";
export default props => (
  <>
    <div className="portfolioWrapper">
      <div className="portfolioContainer">
        <a target="_blank" href="https://marionberton.github.io/vima/">
          <div className="circle">
            <p className="project">Vima</p>
          </div>
        </a>
        <div>
          <p className="paragraph">
            First project I built was a landing page, to practice my html, CSS
            and the use of svg.
          </p>
        </div>
      </div>
      <div className="portfolioContainer">
        <a
          target="_blank"
          href="https://marionberton.github.io/Caesar-Cipher-exercise/"
        >
          <div className="circle">
            <p className="project">Caesar-Cipher</p>
          </div>
        </a>
        <div>
          <p className="paragraph">
            The purpose of building the caesar-cipher was to learn how to test
            my code with the Jest library
          </p>
        </div>
      </div>
    </div>
  </>
);
