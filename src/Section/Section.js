import React from "react";
import "./Section.css";
const Section = ({isOpen, children}) => { //destructuring
  return (
    <div className={isOpen ? "isOpen" : "isClose"}>{children}</div>
  );
};

export default Section;
