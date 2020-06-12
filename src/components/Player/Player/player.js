import React from "react";
import { useEffect, useState, useCallback } from "react";
import classes from "./PlayList.module.css";
import { getRandom } from "../../../util/util";
export const Player = (props) => {
  const { tracks, spotify } = props;

  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [cover, setCover] = useState("");

  const getCurrent = useCallback(() => {
    spotify.getMyCurrentPlayingTrack(function (err, data) {
      if (err) {
        console.error(err);
      } else {
        // make sure we do the 'sets' safely...
        if (data.hasOwnProperty("item")) {
          setArtist(data.item.artists[0].name);
          setSong(data.item.album.name);
          setCover(data.item.album.images[0].url);
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
              { device_id: data.devices[0].id, uris: uris },
              function (err, data) {
                if (err) {
                  console.error(err);
                } else {
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
        <div className={classes.Cover}>
          <div>
            <img src={cover} alt="album cover" />
          </div>
          <div>
            <h3>{artist}</h3>
            <p>{song}</p>
          </div>
        </div>
      </div>
      <div className={classes.Right}>
        {tracks.map((track) => {
          const maxRandom = 1000000;
          const random = getRandom(0, maxRandom);
          console.log(track);
          return (
            <img
              key={random}
              src={track.album.images[0].url}
              alt="album artwork"
            />
          );
        })}
      </div>
    </div>
  );
};
