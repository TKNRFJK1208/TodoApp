import React, { Component } from "react";

import TodoItems from "../Items";
import './List.css';
 
class TodoList extends Component {

  constructor(props){
    super(props);

    // set state, to start list is empty
    this.state = {
      items: []
    };

    // bind event handlers
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <div className="todo-list-main">
        <div className="todo-form">
          <form onSubmit={this.addItem}>

            {/* check later might be better to do this using state */}
            <input ref={(a) => this._inputElement = a} 
                  placeholder="enter task">          
            </input>

            <button type="submit">add</button>

          </form>
        </div>

        <TodoItems entries={this.state.items} 
          delete={this.deleteItem}/>
      </div>
    );
  }

  addItem(e){
    // check that something was entered
    if (this._inputElement.value !== "") {

      // create a new item
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      // previous state (list before) is concatentated with the new item      
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      // clear using the ref
      this._inputElement.value = "";
    }
     
    // console.log(this.state.items);
       
    // override default behavior, IE post a form 
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }
}

export default TodoList;