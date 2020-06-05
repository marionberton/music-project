import * as SpotifyWebApi from 'spotify-web-api-js';

export const getSpotify = () => {

    let spotify = new SpotifyWebApi()
    spotify.setAccessToken('BQAzj9uiadl0ZMULnZWCMnsTCc12bOGEchlgloNJ6ZIrgQfqQBcRGMtbMAw-Nd5gflZENX61Hctq5bDJNgiJ6LIoGGJFrA5HD4fjIZKNhnm4ePwkHKSs4Isi_UqRTxLNuH_Bh7iS4Tz6PgCiVhkKeIoAbB5DOMICw94P-gUJW3aOl6hpU7dv8E-iOJIWrLlETd_ZFbG_jM1UkA550K5bpFrPn6A9XkklV1Ragn288edLRZo8_RFa3pj82_2jZ2SEKV5b6cquS4yBWLNg')

    return spotify
}
