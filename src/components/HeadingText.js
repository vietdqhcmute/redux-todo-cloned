import React from 'react'

const HeadingText = (props) => {
  const tasksNoun = props.taskList.length !== 1 ? "tasks" : "task";
  return (
    <h2 id="list-heading" tabIndex="-1" ref={props.listHeadingRef}>
      {props.taskList.length} {tasksNoun} remaining
    </h2>
  )
}

export default HeadingText
