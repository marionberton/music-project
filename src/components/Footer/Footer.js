import React from "react";
import './Footer.css'
export default () => (
  <footer>
    <div className="some-wrapper">
      <div className="some-container">
        <a target="_blank" href="https://github.com/marionberton">
          <img className="some" src="./img/github-sign.svg" />
        </a>
      </div>
      <div className="some-container">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/marion-berton-b906b5b2/"
        >
          <img className="some" src="./img/linkedin.svg" />
        </a>
      </div>
    </div>
  </footer>
);
