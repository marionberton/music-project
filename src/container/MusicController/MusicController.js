import React, { useEffect, useState } from "react";

import { Search } from "../../components/Search/Search";
import { Player } from "../../components/Player/Player/player";
import { getRandom } from "../../util/util";
import { getHashParams } from "../../util/util";
import { Signin } from "../../components/signin/Signin";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import classes from "./MusicController.module.css";

const MusicController = (props) => {
  const [trackData, setTrackData] = useState([]);
  const [country, setCountry] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const { spotify } = props;

  useEffect(() => {
    //for spotify Signin
    const params = getHashParams();
    console.log(params);
    const token = params.access_token;
    console.log("TOKEN", token);
    if (token) {
      spotify.setAccessToken(token);
      setLoggedIn(true);
    }

    if (country !== null) {
      const maxTracks = 1995;
      const trackLimit = 5;
      const random = getRandom(0, maxTracks);

      // Fetching API
      spotify.searchTracks(
        `${country.name}`,
        {
          limit: trackLimit,
          offset: random,
          min_popularity: 5,
          max_popularity: 80,
        },

        function (err, data) {
          if (err) {
            console.error(err);
            setLoggedIn(false);
          } else {
            setTrackData(data.tracks.items);
          }
        }
      );
    }
  }, [spotify, country]);

  return (
    <>
      {loggedIn ? (
        <>
          <div className={classes.Music}>
            <Search onResult={setCountry} />

            <Player tracks={trackData} spotify={spotify} />
          </div>
        </>
      ) : (
        <section>
          <div>
            <h1>Please sign in with Spotify</h1>
          </div>
        </section>
      )}
    </>
  );
};

export default MusicController;

//https://api-v2.soundcloud.com/payments/consumer-subscriptions/active?client_id=TyQAtemcOqFFQTCV2qqy3rmP9cOn066j&app_version=1584447615&app_locale=en
