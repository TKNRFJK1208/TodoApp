import React, { Component } from "react";

// components
import TodoList from '../../components/Todo/List';


// if you import css and image files compilation will make up missing files
import './TodoApp.css';
 
class TodoApp extends Component {

  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>

        <p>This app will apply some of the lecture concepts:</p>

        <ul>
          <li>It will load the component TodoList which will contain the child component TodoItems</li>          
          <li>The parent component will maintain the array items in state</li>
          <li>The child control will render the array using the built in React List and Keys feature</li>
          <li>The parent have method addItem() which will be bound to onSubmit from the form in the component. </li>
          <li>The parent will also have the method deleteItem() which will be bound to the child control</li>
          <li>The child control will store this binding as a prop and it will be invoked by onClick for the delete button</li>          
        </ul>


        <hr />

        <TodoList />
      </div>
      
    );
  }  
}

export default TodoApp;