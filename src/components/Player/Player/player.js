import React from "react";
import { useEffect, useState, useCallback } from "react";
import classes from "./PlayList.module.css";
import { getRandom } from "../../../util/util";

export const Player = (props) => {
  const { tracks, spotify } = props;

  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [cover, setCover] = useState("");
  // const [bar, setBar] = useState("");
  // const [progress, setProgress] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getCurrent = useCallback(() => {
    spotify.getMyCurrentPlayingTrack(function (err, data) {
      if (err) {
        console.error(err);
      } else {
        // make sure we do the 'sets' safely...
        if (data.hasOwnProperty("item")) {
          console.log("hasProperty", data.hasOwnProperty("item"));
          setArtist(data.item.artists[0].name);
          console.log(setArtist(data.item.artists[0].name));
          setSong(data.item.name);
          setCover(data.item.album.images[0].url);
          // setBar(data.item.duration_ms);
          // console.log(setBar(data.item.duration_ms));
        }
      }
    });
  }, [spotify]);

  useEffect(() => {
    if (tracks.length) {
      console.log("TRACKS:", tracks.length);
      spotify.getMyDevices(function (err, data) {
        if (err) {
          console.error(err);
        } else {
          // check the user is logged into spotify
          if (data.devices.length) {
            console.log("DEVICE", data.devices.length);
            const uris = tracks.map((track) => {
              console.log("URI", track.uri);
              return track.uri;
            });
            console.log("URIS", uris);
            spotify.play(
              {
                device_id: data.devices[0].id,
                uris: uris,
                // position_ms: data.position_ms,
              },

              function (err, data) {
                if (err) {
                  console.error(err);
                } else {
                  // setProgress(1000);
                  setIsPlaying(true);
                  setInterval(() => getCurrent(), 1000);
                }
              }
            );
          }
        }
      });
    }
  }, [spotify, tracks, getCurrent]);

  return (
    <div className={classes.PlayList}>
      <div className={classes.Left}>
        <div className={classes.MainCover}>
          <div style={{ display: "flex" }}>
            {cover ? <img src={cover} alt="album cover" /> : null}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              alignSelf: "center",
            }}
          >
            <h3>{artist}</h3>
            <p>{song}</p>
          </div>
        </div>
        <div>
          {/* <div>{isPlaying ? "Playing" : "Paused"}</div> */}
          {/* <div className={classes.Progress}>
            <div
              className={classes.Progress_bar}
              style={{
                width: ({setProgress} * 100) / setBar,
              }}
            ></div>
          </div>  */}
        </div>
      </div>
      <div className={classes.Right}>
        {tracks.map((track) => {
          const maxRandom = 1000000;
          const random = getRandom(0, maxRandom);
          console.log(track);
          return (
            <div className={classes.Cover}>
              <img
                key={random}
                src={track.album.images[0].url}
                alt="album artwork"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
