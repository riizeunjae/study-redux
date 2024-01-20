import { saga as boardSaga } from "./boardSaga"
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all(
    [
    boardSaga()
    ]
  );
}