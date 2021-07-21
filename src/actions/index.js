import {
  BEGIN_ADD_TASK,
  BEGIN_COMPLETE_TASK,
  BEGIN_FETCH_TASK,
  BEGIN_DELETE_TASK,
  FINISH_DELETE_TASK,
  EDIT_TASK,
  FINISH_ADD_TASK,
  FINISH_COMPLETE_TASK,
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

export const beginAddTask = (payload) => ({ type: BEGIN_ADD_TASK, payload });
export const finishAddTask = (payload) => ({ type: FINISH_ADD_TASK, payload });
export const beginCompleteTask = (payload) => ({
  type: BEGIN_COMPLETE_TASK,
  payload,
});
export const finishCompleteTask = (payload) => ({
  type: FINISH_COMPLETE_TASK,
  payload,
});
export const beginDeleteTask = (payload) => ({
  type: BEGIN_DELETE_TASK,
  payload,
});
export const finishDeleteTask = (payload) => ({
  type: FINISH_DELETE_TASK,
  payload,
});
export const editTask = (payload) => ({ type: EDIT_TASK, payload });
