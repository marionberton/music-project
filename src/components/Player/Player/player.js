import React from "react";
import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Player.module.css";
import Tracks from "./tracks";
import { SaveTrack } from "./saveTrack";

export const Player = (props) => {
  const { tracks, spotify } = props;

  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [cover, setCover] = useState("");
  const [duration, setDuration] = useState(null);
  const [progress, setProgress] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [activeTrack, setActiveTrack] = useState(false);

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

  const nextHandler = () => {
    spotify.getMyDevices(function (err, data) {
      if (err) {
        console.error(err);
      } else {
        // check the user is logged into spotify
        if (data.devices.length) {
          spotify.skipToNext({ device_id: data.devices[0].id }, function (
            err,
            data
          ) {
            if (err) {
              console.error(err);
            } else {
              setNext(true);
            }
          });
        }
      }
    });
  };

  const prevHandler = () => {
    spotify.getMyDevices(function (err, data) {
      if (err) {
        console.error(err);
      } else {
        // check the user is logged into spotify
        if (data.devices.length) {
          spotify.skipToPrevious({ device_id: data.devices[0].id }, function (
            err,
            data
          ) {
            if (err) {
              console.error(err);
            } else {
              setPrev(true);
            }
          });
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
          setActiveTrack(data.item.id);
          setDuration(data.item.duration_ms);
          setProgress(data.progress_ms);
          setNext(false);
          setPrev(false);
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
    <div className={classes.Play}>
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
            <h3>{song}</h3>
            <p>{artist}</p>
          </div>
        </div>

        <div className={classes.Player}>
          <SaveTrack activeTrack={activeTrack} spotify={spotify} />
          <div className={classes.Control}>
            <div onClick={prevHandler}>
              <FontAwesomeIcon icon={faBackward} color="#51596D" size="1x" />
            </div>
            <div onClick={clickHandler}>
              {isPlaying ? (
                <FontAwesomeIcon
                  icon={faPauseCircle}
                  color="#F79857"
                  size="2x"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  color="#F79857"
                  size="2x"
                />
              )}
            </div>
            <div onClick={nextHandler}>
              <FontAwesomeIcon icon={faForward} color="#51596D" size="1x" />
            </div>
          </div>

          <div>
            <progress max={duration} value={progress}></progress>
          </div>
        </div>
      </div>
      <div className={classes.Right}>
        <Tracks key={tracks.id} tracks={tracks} />
      </div>
    </div>
  );
};
