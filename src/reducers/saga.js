import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { finishFetchTasks } from "../actions";
import { BEGIN_FETCH_TASK } from "../actions/types";

function* fetchTask({ onSuccess }) {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/todos?userId=1"
    );
    onSuccess(true);
    yield put(finishFetchTasks(response.data));
  } catch (e) {
    console.error(e);
  }
}

function* rootSaga() {
  yield takeLatest(BEGIN_FETCH_TASK, fetchTask);
}

export default rootSaga;
