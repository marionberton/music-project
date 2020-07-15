import React from "react";

import classes from "./PlayList.module.css";

const Tracks = ({ tracks }) => {
 
  
console.log('Tracks',tracks)

  return tracks.map((track) => (
    <div className={classes.Cover}>
      <img key={track.id} src={track.album.images[0].url} alt="album artwork" />
    </div>
  ));
};

export default React.memo(Tracks)