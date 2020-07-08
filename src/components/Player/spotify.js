import * as SpotifyWebApi from "spotify-web-api-js";

export const getSpotify = () => {
  let spotify = new SpotifyWebApi();
  // spotify.setAccessToken(
  //   "BQAaixghkZbnpi8mgfEQrrEK-NC-fSnCuwUUBmKZQSY3DX91PhXqeVUXNzttLdFZ-OC8tlqZIyhHIsgDinLGVSg1Sc70ZAPnu3gBKHsveZdm5qvgdl46p9FUPVU1ItEltN1g3gamotJCzObcHCvHS-dzBaVXxPWpccCD1TksXPSoCkLVkPutcfc1MxVdO0wC-ftZRRL-z_tf8bGg9wwT4Y5CzvwCC9OTRwEv-mv7BFPWgsjR7c4U8LJtiB1T3nZVYIndym-sNWbtaftETP7wXOgGR16jSjm3GsfJ22Mo"
  // );

  return spotify;
};

// var redirect_uri = "http://localhost:8888/callback"; // Your redirect uri