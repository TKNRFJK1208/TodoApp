import React, { Component } from "react";

// assets and css
import './Home.css';

// components


class Home extends Component {
  
  render() {
    return (
      <div>
        <h1>MDIA 3295 - Week 12 Examples</h1>        

        <p>This example will show:</p>

        <ul>
          <li>How to create a basic SPA by organizing views as components</li>
          <li>How to load assets in the src folder and public folder</li>
          <li>How to work with Lists and Keys in React</li>
          <li>How events are bound in a component</li>          
        </ul>        
      </div>
      
      



    );
  }  
}

export default Home;