import React from "react";
// import { NavLink } from "react-router-dom";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Button from "../../UI/Button/Button";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Logo />
    <nav>
      <NavigationItems />
      <Button selected="Selected">Join the Beta</Button>
    </nav>
  </header>
);

export default toolbar;

// <Button onClick={props.onClick}>Home</Button>
// <Button onClick={props.onClick}>Log in</Button>
// <Button selected="Selected">Join the Beta</Button>
