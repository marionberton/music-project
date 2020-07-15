import React from "react";
// import { NavLink } from "react-router-dom";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Button from "../../UI/Button/Button";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Logo />
    <nav>
      <NavigationItems />
      {/* <Button selected="Selected">Join the Beta</Button> */}
      <a href="http://localhost:8888" role="button" className={classes.Button}>
        Signin with Spotify
      </a>
    </nav>
  </header>
);

export default Toolbar;

// <Button onClick={props.onClick}>Home</Button>
// <Button onClick={props.onClick}>Log in</Button>
// <Button selected="Selected">Join the Beta</Button>
