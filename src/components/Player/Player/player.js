import React from "react";
import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Player.module.css";
import Tracks from "./tracks";

export const Player = (props) => {
  const { tracks, spotify } = props;

  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [cover, setCover] = useState("");
  const [duration, setDuration] = useState(null);
  const [progress, setProgress] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [addTrack, setAddTracks] = useState(false);

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

  const saveTrack = () => {
    spotify.getMySavedTracks(function (err, data) {
      if (err) {
        console.error(err);
      } else {
        console.log("SAVED tracks Button", data.items);
        spotify.addToMySavedTracks(function (trackId, err, data) {
          if (err) {
            console.error(err);
          } else {
            setAddTracks(true);
            console.log("DATA Button", data);
          }
        });
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
          // setAddTracks(data.item.id);
          setDuration(data.item.duration_ms);
          setProgress(data.progress_ms);
          console.log("Current", data.item.id);
        }
      }
    });
  }, [spotify]);

  useEffect(() => {
    if (tracks.length) {
      console.log(tracks.length);
      spotify.getMyDevices(function (err, data) {
        if (err) {
          console.error(err);
        } else {
          // check the user is logged into spotify
          if (data.devices.length) {
            const uris = tracks.map((track) => {
              console.log("Uri", track.uri);
              return track.uri;
            });
            console.log("Uris", uris);
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
    //if (tracks) {
    console.log("Tracks", tracks);
    const ids = tracks.map((track) => {
      return track.id;
    });
    spotify.getMySavedTracks(function (err, data) {
      if (err) {
        console.error(err);
      } else {
        console.log("SAVED tracks", data.items);

        spotify.addToMySavedTracks({ ids: ids }, function (err, data) {
          if (err) {
            console.error(err);
          } else {
            // if (ids === data.items.tracks.id) {
            //   console.log("saved to tracks", ids, data.items[0].track.id);
            // }

            // setInterval(() => getCurrent(), 1000);
            console.log("DATA", data);
          }
        });
      }
    });
    //}
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
            <h3>{artist}</h3>
            <p>{song}</p>
          </div>
        </div>

        <div className={classes.Player}>
          <div onClick={saveTrack}>
            <FontAwesomeIcon icon={faHeart} />
            {/* <button onClick={saveTrack}>Save</button> */}
          </div>
          <div>
            <div onClick={clickHandler}>
              {isPlaying ? (
                <FontAwesomeIcon
                  icon={faPauseCircle}
                  color="orange"
                  size="2x"
                />
              ) : (
                <FontAwesomeIcon icon={faPlayCircle} color="orange" size="2x" />
              )}
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
