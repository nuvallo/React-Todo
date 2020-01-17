import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

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
      <Form className="todo-form">
        <FormGroup row>
          <Label for="todo-input" sm={2}>
            New Todo
          </Label>
          <Col sm={7}>
            <Input
              name="todoValue"
              placeholder="New Todo"
              value={this.state.todoValue}
              onChange={this.changeHandler}
              type="text"
              name="todo-input"
              id="todo-input"
              placeholder="Enter New Todo"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={{ size: 10 }}>
            <Button className="add" onClick={this.submitHandler}>
              Add
            </Button>
            <Button onClick={this.ClearHandler}>Clear Completed</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default TodoForm;
