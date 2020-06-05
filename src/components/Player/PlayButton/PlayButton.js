import React from "react";

import classes from "./PlayButton.module.css";
import Pause from "../../../assets/images/button-pause.svg";
import PlayingBar from "../../../assets/images/song-line.svg";

const PlayButton = props => (
  <div className={classes.PlayButton} >
    <img src={Pause} />
    <img src={PlayingBar} />
  </div>
);

export default PlayButton;
