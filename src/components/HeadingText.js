import React from "react";
import { useSelector } from "react-redux";

const HeadingText = (props) => {
  const taskList = useSelector((state) => state.tasks);
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  return (
    <h2 id="list-heading" tabIndex="-1" ref={props.listHeadingRef}>
      {taskList.length} {tasksNoun} remaining
    </h2>
  );
};

export default HeadingText;
