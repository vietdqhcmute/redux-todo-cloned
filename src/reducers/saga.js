import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { finishFetchTasks } from "../actions";
import { BEGIN_FETCH_TASK } from "../actions/types";
import rsf from "../firestore";

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

function* rootSaga() {
  yield takeLatest(BEGIN_FETCH_TASK, fetchTask);
}

export default rootSaga;
