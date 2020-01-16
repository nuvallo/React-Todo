import React from "react";
import Todo from "./Todo";

const TodoList = list => {
  return (
    <div className="todo-list">
      {list.tasks.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <button>Clear Todo's</button>
    </div>
  );
};

export default TodoList;
