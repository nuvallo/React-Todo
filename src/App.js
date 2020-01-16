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
      task: data
    };
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList tasks={this.state.task} />
      </div>
    );
  }
}

export default App;
