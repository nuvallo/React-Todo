import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import data from "./data";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: data
    };
  }

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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList
          completedTask={this.completedTask}
          tasks={this.state.taskList}
        />
      </div>
    );
  }
}

export default App;
