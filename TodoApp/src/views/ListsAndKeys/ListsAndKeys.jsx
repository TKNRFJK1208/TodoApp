import React, { Component } from "react";

// components

// if you import css and image files compilation will make up missing files
import './ListsAndKeys.css';

// sample data for example, keys need to be unique but don't have to sequential or even numbers
const flowerData = [
  {id: '001', caption: 'Flower alpha', imagePath:'flower-01-md.png'},
  {id: '002', caption: 'Flower beta', imagePath:'flower-02-md.png'},
  {id: '003', caption: 'Flower gamma', imagePath:'flower-03-md.png'},
  {id: '004', caption: 'Flower delta', imagePath:'flower-04-md.png'},
  {id: '005', caption: 'Flower epsilon', imagePath:'flower-05-md.png'},
]
 
class ListsAndKeys extends Component {

  render() {

    return (
      <div>
        <h1>Lists and Keys</h1>

        <p>Collections are very easy to display in React</p>

        <ul>
          <li>Create a function that when passed one member of the collection will return a JSX block for the given element</li>
          <li>Use the .map() method to apply that function to all members of the collection </li>
          <li>The .map() call can either be used in directly in a statement (seen here) or stored in a variable to be use in more than one place.</li>
        </ul>

        <h2>Display List of Flowers</h2>

        <div className="flower-container">
          { flowerData.map(this.drawFlowerBox) }
        </div>        
      </div>
      
    );
  }  

  // helper function to draw one flower
  // draw a given list item, flex is used to spread out the two containers
  drawFlowerBox(item) {
    return (
        <div key={item.id} className="flower-box">
            <div>
                <img src={'./images/' + item.imagePath} className="flower-image" alt={item.caption}  />
            </div>
            <div className="flower-caption">
              {item.caption} 
            </div>
        </div>)
}
}

export default ListsAndKeys;