import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const Todo = props => {
  return (
    <Card
      className="todo-card"
      onClick={e => props.completedTask(props.todo.id)}
    >
      <CardBody>
        <CardTitle>{props.todo.task}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default Todo;
