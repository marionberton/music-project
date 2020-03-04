import React from "react";
import classes from "./Button.module.css"

const button = props => (
  <button className={[classes.Button, classes[props.selected]].join(" ")}>
    {props.children}
  </button>
  //props.children so I can use the button like my own and simply wrap the content that go inside
);

export default button;