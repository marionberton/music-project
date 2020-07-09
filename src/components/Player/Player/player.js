import React from "react";
import { useEffect, useState, useCallback } from "react";

import classes from "./PlayList.module.css";
import Tracks from "./tracks";

export const Player = (props) => {
  const { tracks, spotify } = props;

  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [cover, setCover] = useState("");
  const [duration, setDuration] = useState(null);
  const [progress, setProgress] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const clickHandler = () => {
    //check if it s playing or not
    spotify.getMyDevices(function (err, data) {
      if (err) {
        console.error(err);
      } else {
        // check the user is logged into spotify
        if (data.devices.length) {
          if (isPlaying) {
            spotify.pause({ device_id: data.devices[0].id }, function (
              err,
              data
            ) {
              if (err) {
                console.error(err);
              } else {
                setIsPlaying(true);
              }
            });
          } else {
            spotify.play({ device_id: data.devices[0].id }, function (
              err,
              data
            ) {
              if (err) {
                console.error(err);
              } else {
                setIsPlaying(false);
              }
            });
          }
        }
      }
    });
  };
  const getCurrent = useCallback(() => {
    spotify.getMyCurrentPlayingTrack(function (err, data) {
      if (err) {
        console.error(err);
      } else {
        // make sure we do the 'sets' safely...
        if (data.hasOwnProperty("item")) {
          setArtist(data.item.artists[0].name);

          setSong(data.item.name);
          setCover(data.item.album.images[0].url);
          setIsPlaying(data.is_playing);
          setDuration(data.item.duration_ms);
          setProgress(data.progress_ms);
        }
      }
    });
  }, [spotify]);

  useEffect(() => {
    if (tracks.length) {
      spotify.getMyDevices(function (err, data) {
        if (err) {
          console.error(err);
        } else {
          // check the user is logged into spotify
          if (data.devices.length) {
            const uris = tracks.map((track) => {
              return track.uri;
            });

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
          <div>
            <button onClick={clickHandler}>
              {isPlaying ? "pause" : "play"}
            </button>
          </div>
          <div className={classes.Progress}>
            <progress
              max={duration}
              value={progress}
              className={classes.Progress_bar}
            ></progress>
          </div>
        </div>
      </div>
      <div className={classes.Right}>
        <Tracks tracks={tracks} />
      </div>
    </div>
  );
};
