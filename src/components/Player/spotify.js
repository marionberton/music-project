import * as SpotifyWebApi from 'spotify-web-api-js';

export const getSpotify = () => {

    let spotify = new SpotifyWebApi()
    spotify.setAccessToken('BQADuW0eyqdLi6UJkF7S19Qyqb6Txt1LfFVDDdNT7AzhI5Y-ry12qEhV0yPVw0CF8FUuf9miYFZKH3VTtsAJBFe32uiXWzYgFjRApxgZFY7Z05ph4w-OKQkKKbT3n-KZ2z8XAnVqkuZ4H8wGSj5wDzbJhMyvWN1rMR3xZGxWq94R_OwFpkj9zsrARhHHl3faa1GgF7JWvRjrrfuFssmVxpIsXsSfEPmGwgwMfR9p5RXK54mX-fXnhLb1I9yKAZKZtefyTQ99QfMh4QIT')

    return spotify
}
