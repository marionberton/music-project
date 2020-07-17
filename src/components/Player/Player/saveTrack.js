import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const SaveTrack = ({ activeTrack, spotify }) => {
  const [savedTrack, setSavedTrack] = useState(false);

  useEffect(() => {
    if (activeTrack) {
      spotify.containsMySavedTracks([activeTrack], function (err, data) {
        if (err) {
          console.error(err);
        } else {
          setSavedTrack(data[0]);
        }
      });
    }
  }, [spotify, activeTrack]);

  const savedHandler = () => {
    if (savedTrack) {
      spotify.removeFromMySavedTracks([activeTrack], function (err, data) {
        if (err) {
          console.error(err);
        } else {
          setSavedTrack(false);
        }
      });
    } else {
      spotify.addToMySavedTracks([activeTrack], function (err, data) {
        if (err) {
          console.error(err);
        } else {
          setSavedTrack(true);
        }
      });
    }
  };

  return (
    <div onClick={savedHandler}>
      <FontAwesomeIcon
        icon={faHeart}
        color={savedTrack ? "#F79857" : "#51596D"}
      />
    </div>
  );
};
