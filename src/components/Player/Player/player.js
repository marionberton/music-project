import { useEffect } from "react";

export const Player = ( props ) => {

  const { tracks, spotify } = props

  useEffect(() => {

      if (tracks.length) {
          let deviceId = ''
          spotify.getMyDevices( function ( err, data ) {
              if (err) {
                  console.error(err)
              } else {
                  console.log(data)
                  deviceId = data.devices[0].id
                  spotify.play({device_id: deviceId, uris: [tracks[0].uri]}, function ( err, data ) {
                      if (err) {
                          console.error(err)
                      } else {
                          console.log(tracks[0].uri)
                      }
                  })
              }
          })
      }
}, [spotify, tracks]);
  return null;
};
