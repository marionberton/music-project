import React from "react";

import classes from "./landing.module.css";

const Landing = (props) => {
  return (
    <>
      <section className={classes.Background}>
        <div className={classes.artists}>
          <div>
            <h1>
              Amplify your <span>Spotify</span>
            </h1>
            <p>
              Utilize your spotify account and uncover new music around the
              world, with the help of a music discovery map!
            </p>
            <a href="/api/login" role="button" className={classes.Button}>
              Sign in with Spotify
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
