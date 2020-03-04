import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import MusicController from "./container/MusicController/MusicController";
import About from "./components/About/About";

const App = props => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={MusicController} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </div>
  );
};
export default App;

// If you add the EXACT property the order does not matter
// without EXACT it does
