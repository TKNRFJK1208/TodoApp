import React, { Component } from "react";

// components

// if you import css and image files compilation will make up missing files
import './Header.css';
//import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';
import BcitLogo from '../../assets/icons/BcitLogo';

 
class Header extends Component {

  // not seen here but currView was passed as a prop
  // also a refence to the changeView() function was passed as nav 
  
  
  navigate(viewName) {
    // the nav prop is a refernce to the method in the parent to change the view
    this.props.nav(viewName);
  }

  render() {
    return (
      <div className='head-bar'>
        <div className='head-brand'>
          <BcitLogo className="head-logo" />

          <div className='head-title'>
            <div>MDIA 3295</div>
            <div>App Development Strategy 2</div>
          </div>   
        </div>        

        <div className='nav-menu'>
          <li className={(this.props.currView === 'HOME') ? 'nav-item-curr' : 'nav-item'} onClick={() => this.navigate('HOME')}>
            Home
          </li>
          
          <li className={(this.props.currView === 'MEDIA') ? 'nav-item-curr' : 'nav-item'}  onClick={() => this.navigate('MEDIA')}>
            Media
          </li>

          <li className={(this.props.currView === 'LISTSANDKEYS') ? 'nav-item-curr' : 'nav-item'} onClick={() => this.navigate('LISTSANDKEYS')}>
            Lists and Keys
          </li>

          <li className={(this.props.currView === 'TODOAPP') ? 'nav-item-curr' : 'nav-item'} onClick={() => this.navigate('TODOAPP')}>
            Todo App
          </li>
        </div>            
      </div>
      
    );
  }  
}

export default Header;