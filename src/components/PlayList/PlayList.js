import React from "react";

import classes from "./PlayList.module.css";
import Album from "../PlayList/Album/Album";
import PlayButton from "../PlayList/PlayButton/PlayButton";
import jLefty from "../../assets/images/group-3.svg";

const playList = props => (
  <div className={classes.PlayList}>
    <div className={classes.Left}>
      <Album />
      <PlayButton />
    </div>
    <div className={classes.Right}>
      <img src={jLefty} />
      <img src={jLefty} />
      <img src={jLefty} />
      <img src={jLefty} />
      <img src={jLefty} />
    </div>
  </div>
);

export default playList;
