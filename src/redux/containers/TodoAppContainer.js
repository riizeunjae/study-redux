import TodoApp from "../../components/TodoApp";
import { connect } from "react-redux";
// import {
//   addTodoActionCreator,
//   removeAllActionCreator,
//   removeTodoActionCreator,
// } from "../actions";
// import {
//   addTodoActionCreator,
//   removeTodoActionCreator,
//   removeAllActionCreator,
// } from "../ducks/todoDuck";

import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../actions/todoAction";

function mapStateToProps(state, ownProps) {
  return {
    todoItems: state.todo,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      dispatch(addTodoActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
  };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
