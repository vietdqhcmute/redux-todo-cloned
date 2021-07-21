import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { beginAddTask } from "../actions";

const Form = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleOnAdd = (data) => {
    const title = data.title;
    if (!title.trim()) {
      return;
    }
    dispatch(beginAddTask(title));
    reset();
  };

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
        {...register("title")}
      ></input>
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default Form;
