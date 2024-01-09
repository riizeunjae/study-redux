// 3가지 effect creator통해서 Saga 만듦.
import { put, delay, takeEvery } from "redux-saga/effects";
import {
  fetchTodosFailed,
  fetchTodosRequested,
  fetchTodosSucceeded,
} from "../actions/fetchTodosAction";

// fetchTodos Action이 dispatch될 때마다 아래의 fetchTodos Generator를 실행한다.
// fetchTodos Generator에서는 delay와 put effect creator를 사용해서 비동기 요청을 처리한 이후에
// 성공 실패 여부에 따라 각기 다른 Action을 dispatch한다.
function* fetchTodos() {
  try {
    // 실제로는 서버 API를 호출해서 데이터를 받아와야 함!
    const data = yield delay(3000, [
      "서버로부터 받아온 할 일 1",
      "서버로부터 받아온 할 일 2",
      "서버로부터 받아온 할 일 3",
    ]);
    // fetchTodosSucceeded를 통해 data가 store로 전송
    yield put(fetchTodosSucceeded(data));
  } catch (error) {
    yield put(fetchTodosFailed(error));
  }
}

function* fetchTodosSaga() {
  yield takeEvery(fetchTodosRequested, fetchTodos);
}

export default fetchTodosSaga;
