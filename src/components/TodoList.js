import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

const TodoList = (props) => {
  const taskList = useSelector((state) => state.tasks);
  return (
    <ul
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {taskList.map((task) => (
        <Todo
          id={task.id}
          title={task.title}
          completed={task.completed}
          key={task.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
