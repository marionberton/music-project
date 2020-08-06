import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
  <header>
    <div className={classes.Toolbar}>
      <Logo />
      <nav>
        <NavigationItems />
        {/* <a href="/api/login" role="button" className={classes.Button}>
        Signin with Spotify
      </a> */}
      </nav>
    </div>
  </header>
);

export default Toolbar;
