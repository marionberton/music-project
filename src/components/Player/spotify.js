import * as SpotifyWebApi from 'spotify-web-api-js';

export const getSpotify = () => {

    let spotify = new SpotifyWebApi()
    spotify.setAccessToken('BQBRyGtNI--7juYQPVDm8cQIhF9zTiHxI7Bf3eubWmEKUjB68R9hu_0P_uAOzRHM3vkzoWW39cu1ebx1yP9QltB0h-3joPXvsnhynHk0PbQ9ATfNK_rwxwjW40nxwIMyDV65yw2PJAgnhQcuZVENvUdUYYg12SE4MMi4uhm65YmYNOxUcCUGbINw2oqMx-WhjMqJOFruIXKBRIgcs-54c3ggZ-OPwbiYTpyNiqtBuUytw62Iz6AQ43wj0QyBiZf9EMVDFMNdh9wfdFOy')

    return spotify
}
