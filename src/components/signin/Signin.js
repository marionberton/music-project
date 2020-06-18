import React from "react";


export const Signin = (props) => {
  

  

  // const [loggedIn, setLoggedIn] = useState(false);
  // const [nowPlaying, setNowPlaying] = useState({});

  // 	const getNowPlaying = () =>{
  //   spotify.getMyCurrentPlaybackState()
  //     .then((response) => {
  //       this.setState({
  //         nowPlaying: {
  //             name: response.item.name,
  //             albumArt: response.item.album.images[0].url
  //           }
  //       });
  //     })
  // }

  return (
    <div className="App">
      <a href="http://localhost:8888"> Login to Spotify </a>
    </div>
  );
};

//Don't forget to add souncloud client ID to .env
//add it to Netlify
