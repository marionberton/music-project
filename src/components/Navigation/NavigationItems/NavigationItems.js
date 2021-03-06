import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Home</NavigationItem>
    {/* <NavigationItem link="/about">About</NavigationItem>
    <NavigationItem link="/tribute">A.Tribute</NavigationItem> */}
  </ul>
);
//active is a boolean value so we can just write active instead of active={true}
export default navigationItems;
