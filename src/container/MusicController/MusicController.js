import React, { useEffect, useState } from "react";
// import axios from "axios-orders";

import Search from "../../components/Search/Search";
import PlayList from "../../components/PlayList/PlayList";

const MusicController = props => {
  const [data, setData] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //[] destructuring an array
  // {} destructuring an object
  // const state = useState(null);
  // const data = state[0];
  // const setData = state[1];

  useEffect(() => {
    //users url get artist and use avatar in playlist
    const getData = async (country = "France") => {
      const users = await window.fetch(
        `https://api.soundcloud.com/users/?client_id=PlZuraHdl9926OYs9P9TdcEHyEXIYeag&q=${country}`
      );
      const usersJSON = await users.json();
      const username = usersJSON[0].username;
      // setData(usersJSON[0].username);

      const tracks = await window.fetch(
        `https://api.soundcloud.com/tracks/?client_id=PlZuraHdl9926OYs9P9TdcEHyEXIYeag&q=${username}`
      );

      const tracksJSON = await tracks.json();

      setData(tracksJSON);
      setAvatar(usersJSON[0].avatar_url);
      setIsLoading(false);
    };
    getData("France");
  }, []); //by default useEffect run always, infinite loop we put the empty array so it runs once


  return (
    <>
      { isLoading && <p>Data is loading..</p>}
      {avatar === null ? null : <img src={avatar} />}
      <pre style={{ textAlign: "left" }}>
        {JSON.stringify(data, null, 2, "\n")}
      </pre>
      <Search data={data}/>
      <PlayList />
    </>
  );
};

// componentDidMount() {
//   axios
//   .get('https://api.soundcloud.com/tracks/13158665?client_id=PlZuraHdl9926OYs9P9TdcEHyEXIYeag')

// }

export default MusicController;
