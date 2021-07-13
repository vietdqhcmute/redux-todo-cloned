import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";

const Form = (props) => {
  const [name, setName] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleOnAdd = (data) => {
    const content = data.content;
    if (!content.trim()) {
      return;
    }
    dispatch(addTask(content));
    reset();
  };
  // function handleSubmit(e) {
  //
  //
  // }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit(handleOnAdd)}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        {...register("content")}
      ></input>
      {/* <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      /> */}
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default Form;
