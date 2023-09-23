import { call, put, takeLatest } from "redux-saga/effects";
import {
  finishAddTask,
  finishCompleteTask,
  finishFetchTasks,
  finishDeleteTask,
} from "../actions";
import {
  BEGIN_ADD_TASK,
  BEGIN_COMPLETE_TASK,
  BEGIN_FETCH_TASK,
  BEGIN_DELETE_TASK,
} from "../actions/types";
import { mockFetchingTasks } from "../mock/mockApiService";

function* fetchTask({ onSuccess }) {
  try {
    const response = yield call(mockFetchingTasks);
    yield put(finishFetchTasks(response));
    onSuccess(true);
  } catch (e) {
    console.error(e);
  }
}

function* addTask(action) {
  try {
    const newTask = {
      title: action.payload,
      completed: false,
    };
    yield put(finishAddTask(newTask));
  } catch (e) {
    console.error(e);
  }
}

function* completeTask(action) {
  try {
    const tasks = [];
    yield put(finishCompleteTask(tasks));
  } catch (e) {
    console.error(e);
  }
}

function* deleteTask(action) {
  const id = action.payload;
  try {
    const tasks = [];
    yield put(finishDeleteTask(tasks));
  } catch (error) {
    console.error(error);
  }
}

function* rootSaga() {
  yield takeLatest(BEGIN_FETCH_TASK, fetchTask);
  yield takeLatest(BEGIN_ADD_TASK, addTask);
  yield takeLatest(BEGIN_COMPLETE_TASK, completeTask);
  yield takeLatest(BEGIN_DELETE_TASK, deleteTask);
}

export default rootSaga;
