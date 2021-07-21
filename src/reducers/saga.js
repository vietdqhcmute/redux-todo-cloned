import { call, put, takeLatest } from "redux-saga/effects";
import { finishAddTask, finishFetchTasks } from "../actions";
import { BEGIN_ADD_TASK, BEGIN_FETCH_TASK } from "../actions/types";
import rsf from "../firestore";
import { nanoid } from "nanoid";

function* fetchTask({ onSuccess }) {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "tasks");
    const tasks = [];
    snapshot.forEach((doc) => {
      tasks.push(doc.data());
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
      id: "todo-" + nanoid(),
      title: action.payload,
      completed: false,
    };
    yield call(rsf.firestore.addDocument, "tasks", newTask);
    yield put(finishAddTask(newTask));
  } catch (e) {
    console.error(e);
  }
}

function* rootSaga() {
  yield takeLatest(BEGIN_FETCH_TASK, fetchTask);
  yield takeLatest(BEGIN_ADD_TASK, addTask);
}

export default rootSaga;
