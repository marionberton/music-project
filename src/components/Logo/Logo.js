import React from "react";
import ApalaaLogo from "../../assets/images/logo.svg";
import classes from "./Logo.module.css";
const logo = props => (
  <div className={classes.Logo}>
    <img src={ApalaaLogo} alt="MyLogo" />
  </div>
);

export default logo;
