import React, { Component } from 'react';
import './App.css';
import Taskinput from './Taskinput';
import TaskList from './TaskList';


class App extends Component {
  constructor() {
    super();

    this.addTasks = this.addTasks.bind(this);
    this.deleteTasks = this.deleteTasks.bind(this);

    // set initial state
    this.state = {
      toDo: []
    }
  }


  addTasks(task) {
    // take a copy of state
    const tasks = this.state.toDo;

    // add to state
    const timestamp = Date.now();
    tasks[`task-${timestamp}`] = task;

    this.setState({
      toDo: tasks
    })
  }

  deleteTasks(task) {
    // copy of state
    const tasks = this.state.toDo;

    // delete from state
    delete tasks[task]
    
    // set new state
    this.setState({
      toDo: tasks
    })
    
  }

  render() {
    return (
      <div className="App">
        <Taskinput addTasks={this.addTasks}/>
        <TaskList listItem={this.state.toDo} deleteTasks={this.deleteTasks}/>
      </div>
    );
  }
}

export default App;
