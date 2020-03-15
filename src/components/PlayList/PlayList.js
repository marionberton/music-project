import React from "react";

import classes from "./PlayList.module.css";
import Album from "../PlayList/Album/Album";
import PlayButton from "../PlayList/PlayButton/PlayButton";
import jLefty from "../../assets/images/group-3.svg";

const playList = ({ tracks }) => (
  <div className={classes.PlayList}>
    <div className={classes.Left}>
      <Album />
      <PlayButton />
    </div>
    <div className={classes.Right}>
      {tracks.map(track => (
        <img src={track.artwork_url} />
      ))}
    </div>
    <pre style={{ textAlign: "left" }}>
      {JSON.stringify(tracks, null, 2, "\n")}
    </pre>
  </div>
);

export default playList;
