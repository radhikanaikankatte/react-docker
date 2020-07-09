import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';


import './App.css';
import About from './components/layout/pages/About';

class App extends Component {

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map( todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  };

  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })

  };

  addTodo = (title) => {
    if(title){
      axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed: false
      })
      .then(res => (
        this.setState({
            todos: [...this.state.todos, res.data]
          })
        )
      )
    }
  }

  state = {
    todos: []
};

componentDidMount() {
  axios.get(' https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => (
      this.setState({
        todos : res.data
      })
    ))
}

  render(){
    return (
      <Router>
      <div className="App">
        <div id='container'>
          <Header/>
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo onSubmit={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}/>
            </React.Fragment>
          )}/>
        </div>
        <div id='containerAbout'>
          <Route path='/About' component = {About}/>
        </div>
      </div>
      </Router>
    );
  }
}


export default App;
