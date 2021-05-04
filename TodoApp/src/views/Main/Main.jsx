import React, { Component } from "react";

// components
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

// views to load
import Home from '../Home';
import Media from '../Media';
import ListsAndKeys from '../ListsAndKeys';
import TodoApp from '../TodoApp';

// if you import css and image files compilation will make up missing files
import './Main.css';
 
class Main extends Component {

  constructor(props){
    super(props);    

    // starting view
    this.state = {
      currView: 'HOME'
    };

    // bind the event 
    this.changeView = this.changeView.bind(this);
  }

  render() {
    return (
      <div>
        {/* we pass the currView and changeView() reference as props to the child component */}
        <Header 
          currView={this.state.currView} 
          nav={this.changeView}/>

        
        {/* this will be the container that we load the views into */}
        <div className="content-container" >
          {this.getViewControl(this.state.currView)}
        </div>  

        <Footer />
      </div>
      
    );
  }  

  changeView(e){
    this.setState({ currView: e});
  }

  // helper function
  getViewControl(viewName){

    switch(viewName){
      case 'HOME':
        return <Home/>;
      case 'MEDIA':
        return <Media/>;
      case 'LISTSANDKEYS':
        return <ListsAndKeys/>;
      case 'TODOAPP':
        return <TodoApp/>;
      default:
        return <Home/>;
    }
  }
}

export default Main;