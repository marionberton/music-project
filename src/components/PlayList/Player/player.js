import { useEffect } from "react";

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const Player = ({ tracks = [] }) => {
  useEffect(() => {
    const play = ({
      spotify_uri,
      playerInstance: {
        _options: { getOAuthToken },
      },
    }) => {
      getOAuthToken((access_token) => {
        fetch(
          `https://api.spotify.com/v1/me/player/play?device_id=${window.device_id}`,
          {
            method: "PUT",
            body: JSON.stringify({ uris: [spotify_uri] }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
      });
    };
    if (window.player && tracks.length) {
        play({
          playerInstance: window.player,
          spotify_uri: tracks[0].uri,
        })

        /* window.player.getCurrentState().then(state => {
            if (!state) {
                play({
                  playerInstance: window.player,
                  spotify_uri: tracks[i].uri,
                })
            }
        }) */
    }
  }, [tracks]);
  return null;
};
