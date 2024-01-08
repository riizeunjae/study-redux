// here the function changes existing state: WRONG
function sampleReducer(state, action) {
  switch (action.type) {
    case "SAMPLE ACTION":
      state.value = action.value;
    // 현재 state를 변경
    default:
      return state;
  }
}

// In Immutable way.. return new state: COMMON
function sampleReducer2(state, action) {
  switch (action.type) {
    case "SAMPLE_ACTION":
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
}
