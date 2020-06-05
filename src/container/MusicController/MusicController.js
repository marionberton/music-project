import React, { useEffect, useState } from "react";
// import axios from "axios-orders";

import Search from "../../components/Search/Search";
import PlayList from "../../components/Player/PlayList"

const MusicController = (props) => {

  const [trackData, setTrackData] = useState([])
  const [country, setCountry] = useState(null)
  //const [tracks, setTracks] = useState(null)

  const { spotify } = props
  //[] destructuring an array
  // {} destructuring an object
  // const state = useState(null);
  // const data = state[0];
  // const setData = state[1];

  useEffect(() => {

      if (country !== null) {
          spotify.searchTracks(`${country.name}`, { limit: 5 }, function ( err, data ) {
              if (err) {
                  console.error(err)
              } else {
                  setTrackData(data.tracks.items)
              }
          })
      }
  }, [spotify, country])

  return (
    <>
      <Search onResult={setCountry} />
      <PlayList tracks={trackData} spotify={spotify} />
    </>
  );
};

// componentDidMount() {
//   axios
//   .get('https://api.soundcloud.com/tracks/13158665?client_id=PlZuraHdl9926OYs9P9TdcEHyEXIYeag')

// }

export default MusicController;

//https://api-v2.soundcloud.com/payments/consumer-subscriptions/active?client_id=TyQAtemcOqFFQTCV2qqy3rmP9cOn066j&app_version=1584447615&app_locale=en
