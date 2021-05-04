import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// main view that loads other views
import Main from './views/Main';
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <Main />,
    destination
);