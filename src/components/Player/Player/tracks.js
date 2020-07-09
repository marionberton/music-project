import React from "react";

import classes from "./PlayList.module.css";
import { getRandom } from "../../../util/util";

const Tracks = ({ tracks }) => {
  const maxRandom = 1000000;
  const random = getRandom(0, maxRandom);
  
console.log('Tracks',tracks)
  return tracks.map((track) => (
    <div className={classes.Cover}>
      <img key={track.id} src={track.album.images[0].url} alt="album artwork" />
    </div>
  ));
};

export default React.memo(Tracks)