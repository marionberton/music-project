import { useEffect } from "react";

export const Player = ( props ) => {

  const { tracks, spotify } = props

  useEffect(() => {

      if (tracks.length) {

          spotify.getMyDevices( function ( err, data ) {
              if (err) {
                  console.error(err)
              } else {

                  const uris = tracks.map( ( track ) => {
                     return track.uri
                  })

                 spotify.play({device_id: data.devices[0].id, uris: uris}, function ( err, data ) {
                      if (err) {
                          console.error(err)
                      } else {
                          console.log(tracks)
                      }
                  })
              }
         })
     }
  }, [spotify, tracks])
  return null
}
