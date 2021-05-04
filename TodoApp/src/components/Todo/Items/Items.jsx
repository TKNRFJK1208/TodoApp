import React, { Component } from "react";

import './Items.css';
 
class TodoItems extends Component {    

    constructor(props) {
        super(props);
     
        // because we want to add the delete key handler from the parent we have to explicitly bind the createTasks
        this.drawTask = this.drawTask.bind(this);
    }
     
    delete(key) {
        this.props.delete(key);
    }
  
    render() {
        var todoEntries = this.props.entries;

        // maps the array of list items to html using helper function
        var listItems = todoEntries.map(this.drawTask);
 
        return (
            <ul className="the-list">
                {/* braces for an expression, here effectively resolving to the html */}
                {listItems}
            </ul>
        );
    }

    // draw a given list item, flex is used to spread out the two containers
    drawTask(item) {
        return (
            <li key={item.key}>
                <div>
                    {item.text} 
                </div>
                <div>
                    <button type="button" className="delete-btn" 
                        onClick={() => this.delete(item.key)} >X
                    </button>
                </div>
            </li>)
    }
};
 
export default TodoItems;