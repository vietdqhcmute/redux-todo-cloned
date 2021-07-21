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
import rsf from "../firestore";

function* fetchTask({ onSuccess }) {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "tasks");
    const tasks = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      tasks.push({ id: doc.id, completed: data.completed, title: data.title });
    });
    onSuccess(true);
    yield put(finishFetchTasks(tasks));
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
    yield call(rsf.firestore.addDocument, "tasks", newTask);
    yield put(finishAddTask(newTask));
  } catch (e) {
    console.error(e);
  }
}

function* completeTask(action) {
  try {
    yield call(
      rsf.firestore.updateDocument,
      `tasks/${action.payload.id}`,
      "completed",
      !action.payload.completed
    );
    const snapshot = yield call(rsf.firestore.getCollection, "tasks");
    const tasks = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      tasks.push({ id: doc.id, completed: data.completed, title: data.title });
    });

    yield put(finishCompleteTask(tasks));
  } catch (e) {
    console.error(e);
  }
}

function* deleteTask(action) {
  const id = action.payload;
  try {
    yield call(rsf.firestore.deleteDocument, `tasks/${id}`);

    const snapshot = yield call(rsf.firestore.getCollection, "tasks");
    const tasks = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      tasks.push({ id: doc.id, completed: data.completed, title: data.title });
    });

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
