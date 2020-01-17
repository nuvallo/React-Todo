import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import data from "./data";
import TodoList from "./components/TodoComponents/TodoList";
import Navigation from "./components/Navigation";
import "./App.css";

const error = 0;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: data,
      errors: error
    };
  }

  addTask = taskValue => {
    let Task = this.state.taskList.filter(value => {
      return value.task === taskValue;
    });
    console.log(Task.lenth);

    if (Task.length > 0) {
      this.setState({ errors: 1 });
    } else {
      const newTodo = {
        task: taskValue,
        completed: false,
        id: Date.now()
      };

      this.setState({
        taskList: [...this.state.taskList, newTodo],
        error: 0
      });
    }
  };

  completedTask = id => {
    this.setState({
      taskList: this.state.taskList.map(task => {
        if (id === task.id) {
          console.log("completed", task.completed);
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  clearTask = id => {
    this.setState({
      taskList: this.state.taskList.filter(todo => {
        return todo.completed === false;
      })
    });
  };

  render() {
    return (
      <div className="app">
        <Navigation />

        <TodoForm addTask={this.addTask} clearTask={this.clearTask} />
        <TodoList
          completedTask={this.completedTask}
          tasks={this.state.taskList}
        />
      </div>
    );
  }
}

export default App;
