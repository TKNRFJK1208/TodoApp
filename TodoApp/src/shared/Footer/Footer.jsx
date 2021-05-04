import React, { Component } from "react";

// if you import css and image files compilation will make up missing files
import './Footer.css';
 
class Footer extends Component {

  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div className="footer-bar">
        <div>MDIA 3295 - Week 12 Examplessss</div>
      </div>      
    );
  }  
}

export default Footer;