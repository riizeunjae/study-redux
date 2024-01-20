import { all } from "redux-saga/effects";
import fetchTodosSaga from "./fetchTodosSaga";

// saga가 많아지면 하나의 사라고 만들어서 리덕스 스토어에 연동해야 한다.
function* rootSaga() {
  yield all([fetchTodosSaga()]);
}
export default rootSaga;
