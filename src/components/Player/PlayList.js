//import React, { useState } from "react";
import React from "react";

import classes from "./PlayList.module.css";
import AlbumCover from "../../assets/images/album.jpg";
import { Player } from "../Player/Player/player";

const PlayList = ( props ) => {
  //const [avatar, setAvatar] = useState(tracks[0]);
  const { tracks, spotify } = props

  return (
    <div className={classes.PlayList}>
      <div className={classes.Left}>
        <div className={classes.Album}>
          <div>
            <img src={AlbumCover} alt='album cover'/>
          </div>
          <div>
            <h3>artist name</h3>
            <p>song title</p>
          </div>
        </div>
        <Player tracks={tracks} spotify={spotify} />
      </div>
      <div className={classes.Right}>

           {tracks.map( (track ) => (
             <img key={track.album.images[0].url} src={track.album.images[0].url} alt='album artwork' />
           ))}

      </div>
    </div>
  );
};

export default PlayList;

/*

*/
