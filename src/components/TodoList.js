import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleTaskCompleted = () => {};

  const handleDeleteTask = () => {};

  const handleEditTask = () => {};

  return (
    <ul
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {props.taskList.map((task) => (
        <Todo
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.id}
          toggleTaskCompleted={handleTaskCompleted}
          deleteTask={handleDeleteTask}
          editTask={handleEditTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
