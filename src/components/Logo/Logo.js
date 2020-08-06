import React from "react";
import ApalaaLogo from "../../assets/apalaLogo.svg";
import classes from "./Logo.module.css";
const logo = (props) => (
  <div className={classes.Logo}>
    <img
      src={ApalaaLogo}
      alt="MyLogo"
      style={{ height: "56px", width: "auto" }}
    />
  </div>
);

export default logo;
