import * as SpotifyWebApi from 'spotify-web-api-js';

export const getSpotify = () => {

    let spotify = new SpotifyWebApi()
    spotify.setAccessToken('BQBRbJCj_GQAiN9g4y8DmkHpAe9A8azSzMmrsvLtzLnbA6oDN59fu9VYueg_B2I7M1Gl3cuiB4ov3RIZPlLNwpcoD-y48PGLrR8NfL0nndKUjMKSuApZHAyoBtc21VkLUlEBIuyCwcYIy2eAQhjypRDoqWCyjqe31blfP3wR-2DJFSJ5UqDCQzUL2l2hxhUZoHwI8Ec1JmoU5DR921-2F0DzYk9LdfmMioKFoBULzEKUebOjnptgacbBaDYg8dNLDd42e7bGjPrv2bXt')

    return spotify
}
