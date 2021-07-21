import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import TodoList from "./components/TodoList";
import HeadingText from "./components/HeadingText";

import { nanoid } from "nanoid";
import { beginFetchTasks } from "./actions/index";

const initTodos = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(beginFetchTasks(onSuccess));
  });

  const onSuccess = (res) => {
    console.log(res);
  };
  const [tasks, setTasks] = useState(initTodos);
  const [filter, setFilter] = useState("All");

  const taskList = tasks.filter(FILTER_MAP[filter]);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <HeadingText listHeadingRef={listHeadingRef}></HeadingText>
      <TodoList></TodoList>
    </div>
  );
};

export default App;
