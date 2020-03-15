import React, { useState, useEffect } from "react";

import classes from "./Search.module.css";
import Globe from "../Globe/Globe";

import WorldMap from "../../Data/world-low-res.json";

const Search = props => {
  const { onResult } = props;

  const [country, setCountry] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if(country !== null) {
      onResult(country);
    }
    
  }, [country]);

  const findCountry = name => {
    setCountry(
      WorldMap.layers.find(country => {
        //return country.name.toLowerCase() == name.toLowerCase();
        return country.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
      })
    );
  };

  const clickHandler = name => {
    setCountry(
      WorldMap.layers.find(country => {
        return country.name === name;
      })
    );
    setSearchInput(name);
  };

  return (
    <div className={classes.Search}>
      <h1>Discovery Map</h1>
      <p>Search to Discover New Music</p>
      <div className={classes.SearchItem}>
        <input
          onChange={event => {
            findCountry(event.target.value);
            setSearchInput(event.target.value);
          }}
          type="text"
          placeholder="Search..."
          value={searchInput}
        />
      </div>
      <Globe country={country} onClick={clickHandler} />
    </div>
  );
};

export default Search;
