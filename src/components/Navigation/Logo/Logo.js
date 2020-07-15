import React from "react";
import ApalaaLogo from "../../assets/images/apala-logo 1.png";
import classes from "./Logo.module.css";
const logo = (props) => (
  <div className={classes.Logo}>
    <img src={ApalaaLogo} alt="MyLogo" />
  </div>
);

export default logo;
