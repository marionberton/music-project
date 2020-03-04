import React, { useState } from "react";

import classes from "./Search.module.css";
import SearchItem from "../Search/SearchItem/SearchItem";
import Globe from "../Globe/Globe";

import WorldMap from "../../Data/world-low-res.json";

const Search = () => {
  const [country, setCountry] = useState(null);
const [selected, setSelected] = useState([]);

  const findCountry = name => {
    setCountry(
      WorldMap.layers.find(country => {
        //return country.name.toLowerCase() == name.toLowerCase();
        return country.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
      })
    );
  };

  const clickHandler = () => {
  
  };

  return (
    <div className={classes.Search}>
      <h1>Discovery Map</h1>
      <p>Search to Discover New Music</p>
      <SearchItem update={findCountry} />
      <Globe country={country} click={clickHandler} />
    </div>
  );
};

export default Search;
