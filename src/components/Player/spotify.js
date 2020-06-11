import * as SpotifyWebApi from 'spotify-web-api-js';

export const getSpotify = () => {

    let spotify = new SpotifyWebApi()
    spotify.setAccessToken('BQDm-OJsUXuy5-HCwww2cpI7Eq-OuPQk3CQYuU0XLIA4kJ-oNdjslX53xtE6_A-hY-9uqYeRq7oqPl7Y3KPTNpHq_oa3mSzvPwDX7ad6nS80a01q9ObTxzm_3BQs9EEdNnne45f5ZwB1WSvqZHzBQy0lYO9X4FEOPfGqi_VKxJt-HDX1zIlAV70l1UVA-3DaoDispzfvmsQ-Q-uDMBlhBPZmDBa8ki-wCLJql-xPkz19ChW4I3Op-3c-FRLI_Z0ys96IwNlDwnMcRO0m')

    return spotify
}
