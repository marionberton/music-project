import React, { useEffect, useState } from "react";

import { Search } from "../../components/Search/Search";
import { Player } from "../../components/Player/Player/player";
import { getRandom } from "../../util/util";

const MusicController = (props) => {
  const [trackData, setTrackData] = useState([]);
  const [country, setCountry] = useState(null);

  const { spotify } = props;

  useEffect(() => {
    if (country !== null) {
      const maxTracks = 1995;
      const trackLimit = 5;
      const random = getRandom(0, maxTracks);

      console.log('track offset', random);
      
      spotify.searchTracks(
        `${country.name}`,
        { limit: trackLimit, offset: random },
        function (err, data) {
          if (err) {
            console.error(err);
          } else {
            setTrackData(data.tracks.items);
          }
        }
      );
    }
  }, [spotify, country]);

  return (
    <>
      <Search onResult={setCountry} />
      <Player tracks={trackData} spotify={spotify} />
    </>
  );
};

// componentDidMount() {
//   axios
//   .get('https://api.soundcloud.com/tracks/13158665?client_id=PlZuraHdl9926OYs9P9TdcEHyEXIYeag')

// }

export default MusicController;

//https://api-v2.soundcloud.com/payments/consumer-subscriptions/active?client_id=TyQAtemcOqFFQTCV2qqy3rmP9cOn066j&app_version=1584447615&app_locale=en
