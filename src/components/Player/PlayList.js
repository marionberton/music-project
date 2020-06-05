//import React, { useState } from "react";
import React from "react"
import { useEffect, useState } from "react"

import classes from "./PlayList.module.css";
import { Player } from "../Player/Player/player";

const PlayList = ( props ) => {
  //const [avatar, setAvatar] = useState(tracks[0]);
  const { tracks, spotify } = props
  const [artist, setArtist] = useState("")
  const [song, setSong] = useState("")
  const [cover, setCover] = useState("")

  useEffect(() => {

      setTimeout( function() {
          spotify.getMyCurrentPlayingTrack( function ( err, data ) {
              if (err) {
                  console.error(err)
              } else {

                  console.log(data)
                  setArtist(data.item.artists[0].name)
                  setSong(data.item.album.name)
                  setCover(data.item.album.images[0].url)
              }
         })
     }, 3000)
  })

  return (
    <div className={classes.PlayList}>
      <div className={classes.Left}>
        <div className={classes.Cover}>
          <div>
            <img src={cover} alt='album cover'/>
          </div>
          <div>
            <h3>{artist}</h3>
            <p>{song}</p>
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
