import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import { getSpotify } from "./components/Player/spotify";
import MusicController from "./container/MusicController/MusicController";

const App = (props) => {
  const spotify = getSpotify();
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MusicController spotify={spotify} />}
          />
        </Switch>
      </Layout>
    </div>
  );
};
export default App;

// If you add the EXACT property the order does not matter
// without EXACT it does

