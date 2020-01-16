import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form className="todo-form">
        <input type="text" name="todo" />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
