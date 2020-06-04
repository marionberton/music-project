import React, { useEffect, useState } from "react";
// import axios from "axios-orders";

import Search from "../../components/Search/Search";
import PlayList from "../../components/PlayList/PlayList";

const MusicController = (props) => {
  const [data, setData] = useState({});

  const [country, setCountry] = useState(null);
  //[] destructuring an array
  // {} destructuring an object
  // const state = useState(null);
  // const data = state[0];
  // const setData = state[1];

  useEffect(() => {
    //users url get artist and use avatar in playlist
    let cancelled = false; //cleanup

    const getData = async () => {
      try {
        const tracks = await window.fetch(
          `https://api.spotify.com/v1/search?q=${country.name}&type=track&limit=5`,
          {
            headers: {
              Authorization:
                "Bearer BQBDMxz-j7tFGxcljN4G9nG8mYST8cFpesP4zBhXdZnxXHc86353buD7XhYti9TsUc1LDZSfqvt79IA5JxJxCTq_ON8va5LLN1D_GXEOv-l5zhfCjZ6VEWt2tEKkIcyFcAkJgUbuQ6iWnq8760muk7Opq10YcqdC6p4",
            },
            // Client ID 7b4f5ead24504d808423f99c0a8824a8
            // Client Secret 1f712cee9829498dbbee43533a1848a9
            // Base64 Encoded (id:secret) N2I0ZjVlYWQyNDUwNGQ4MDg0MjNmOTljMGE4ODI0YTg6MWY3MTJjZWU5ODI5NDk4ZGJiZWU0MzUzM2ExODQ4YTk=
            // curl -X "POST" -H "Authorization: Basic N2I0ZjVlYWQyNDUwNGQ4MDg0MjNmOTljMGE4ODI0YTg6MWY3MTJjZWU5ODI5NDk4ZGJiZWU0MzUzM2ExODQ4YTk=" -d grant_type=client_credentials https://accounts.spotify.com/api/token
            // BQB5WiV0gcPMzgZKRVNPwmeX8xZxvqW2zN6k7mPTyhFSoR1LqRFrNU4kW31jIcpEK-mhXGLJvjBRDCVCl-E
          }
        );

        const data = await tracks.json();

        if (!cancelled) {
          setData(data);
        }
      } catch (e) {
        console.log("The Api is curently not working :/");
      }
    };

    if (country !== null) {
      getData();
    }
    return () => (cancelled = true);
  }, [country]); //by default useEffect run always, infinite loop we put the empty array so it runs once

  return (
    <>
      <Search onResult={setCountry} />
      <PlayList tracks={data.tracks?.items} />
    </>
  );
};

// componentDidMount() {
//   axios
//   .get('https://api.soundcloud.com/tracks/13158665?client_id=PlZuraHdl9926OYs9P9TdcEHyEXIYeag')

// }

export default MusicController;

//https://api-v2.soundcloud.com/payments/consumer-subscriptions/active?client_id=TyQAtemcOqFFQTCV2qqy3rmP9cOn066j&app_version=1584447615&app_locale=en
