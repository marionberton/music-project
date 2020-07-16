import React from "react";

import classes from "./Player.module.css";

const Tracks = ({ tracks }) => {
  
  return tracks.map((track) => (
    <div key={track.id} className={classes.Cover}>
      <img src={track.album.images[0].url} alt="album artwork" />
    </div>
  ));
};

export default React.memo(Tracks)