import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./types";

export const addTask = (payload) => ({ type: ADD_TASK, payload });
export const completeTask = (payload) => ({ type: COMPLETE_TASK, payload });
export const deleteTask = (payload) => ({ type: DELETE_TASK, payload });
export const editTask = (payload) => ({ type: EDIT_TASK, payload });
