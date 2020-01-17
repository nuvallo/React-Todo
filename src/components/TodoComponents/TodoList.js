import React from "react";
import Todo from "./Todo";

const TodoList = list => {
  return (
    <div className="todo-list">
      {list.tasks.map(todo => {
        return (
          <div>
            <Todo
              key={todo.id}
              todo={todo}
              completedTask={list.completedTask}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
