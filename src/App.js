import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import TodoList from "./components/TodoList";
import HeadingText from "./components/HeadingText";

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
  const { tasks } = useSelector((state) => state);

  const [filter, setFilter] = useState("All");

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  const onSuccess = (res) => {
    console.log("onSuccess", res);
  };

  useEffect(() => {
    dispatch(beginFetchTasks(onSuccess));
  }, []);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large">
      <Form />
      <div className="filters btn-group stack-exception">
        {FILTER_NAMES.map((name) => (
          <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
          />
        ))}
      </div>
      <HeadingText listHeadingRef={listHeadingRef}></HeadingText>
      <TodoList />
    </div>
  );
};

export default App;
