import {
  ADD_TASK,
  BEGIN_FETCH_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FINISH_FETCH_TASK,
} from "./types";

export const beginFetchTasks = (onSuccess) => ({
  type: BEGIN_FETCH_TASK,
  onSuccess,
});
export const finishFetchTasks = (payload) => ({
  type: FINISH_FETCH_TASK,
  payload,
});
export const addTask = (payload) => ({ type: ADD_TASK, payload });
export const completeTask = (payload) => ({ type: COMPLETE_TASK, payload });
export const deleteTask = (payload) => ({ type: DELETE_TASK, payload });
export const editTask = (payload) => ({ type: EDIT_TASK, payload });
