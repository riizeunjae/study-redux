import { createActions, handleActions } from "redux-actions";

const initialState = {
  // 요청의 진행상태
  pending: false,
  // 요청 성공시 받을 데이터
  data: [],
  // 요청 실패시 받을 에러
  error: null,
};

export const { fetchTodosRequested, fetchTodosSucceeded, fetchTodosFailed } =
  createActions({
    // 요청이 시작되는 것을 나타냄
    FETCH_TODOS_REQUESTED: () => ({}),
    // 성공한 것 나타냄
    FETCH_TODOS_SUCCEEDED: (data) => ({ data }),
    // 실패한 것
    FETCH_TODOS_FAILED: (error) => ({ error }),
  });

// 각 Action에 대한 Reducer
const fetchTodosReducer = handleActions(
  {
    // 비동기 요청이 시작된 것이기 때문에 pending을 true로 변경해 주고, 기존 data, error값은 초기화 시킨다.
    [fetchTodosRequested]: (state, action) => {
      return {
        ...state,
        pending: true,
        data: [],
        error: null,
      };
    },
    // 비동기 요청이 성공한 것이기 때문에 pending은 false로 변경해 주고, action개체에 payload로 전달된 객체를 data에 넣어준다.
    [fetchTodosSucceeded]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload.data,
      };
    },
    // 비동기 요청이 실패한 것이기 때문에 pending은 false로 변경해 주고, action개체에 payload로 전달된 error를 error에 넣어준다.
    [fetchTodosFailed]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    },
  },
  initialState
);
export default fetchTodosReducer;
