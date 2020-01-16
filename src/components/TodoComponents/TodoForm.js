import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: ""
    };
  }

  changeHandler = event => {
    this.setState({ todoValue: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addTask(this.state.todoValue);
    this.setState({ todoValue: "" });
    console.log(this.error);
  };

  ClearHandler = event => {
    event.preventDefault();
    this.props.clearTask();
  };

  render() {
    return (
      <form className="todo-form">
        <input
          type="text"
          name="todoValue"
          placeholder="New Todo"
          value={this.state.todoValue}
          onChange={this.changeHandler}
        />{" "}
        <button onClick={this.submitHandler}>Add</button>
        <button onClick={this.ClearHandler}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
