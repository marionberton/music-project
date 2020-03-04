import React from "react";
import classes from "./SearchItem.module.css";


const searchItem = props => (
  <div className={classes.SearchItem}>
    <input onInput={event => props.update(event.target.value)} type="text"  placeholder="Search..." />
	</div>
);
//onInput is an event listener, call whatever function you give it with an event
//event.target.value retrieves value of whatever input it was called on
export default searchItem;
