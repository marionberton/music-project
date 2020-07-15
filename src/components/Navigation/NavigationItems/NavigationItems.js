import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Home</NavigationItem>
    {/* <NavigationItem link="/signin">Signin</NavigationItem> */}
  </ul>
);
//active is a boolean value so we can just write active instead of active={true}
export default navigationItems;
