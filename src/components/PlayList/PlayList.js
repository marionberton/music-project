import React, { useState } from "react";

import classes from "./PlayList.module.css";
import AlbumCover from "../../assets/images/album.jpg";
import { Player } from "../PlayList/Player/player";

const PlayList = ({ tracks = [] }) => {
  const [avatar, setAvatar] = useState(tracks[0]);
  //console.log(tracks)
  return (
    <div className={classes.PlayList}>
      <div className={classes.Left}>
        <div className={classes.Album}>
          <div>
            <img src={AlbumCover} />
          </div>
          <div>
            <h3>artist name</h3>
            <p>song title</p>
          </div>
        </div>
        <Player tracks={tracks} />
      </div>

      <div className={classes.Right}>
        {tracks.map((track) => (
          <img
            key={track.album.images[0].url}
            src={track.album.images[0].url}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayList;
