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
import { fetchTodosRequested as fetchTodosRequestedActionCreator } from "../actions/fetchTodosAction";
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../actions/todoAction";

function mapStateToProps(state, ownProps) {
  return {
    todoItems: [...state.todo, ...state.fetchTodos.data],
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
    triggerAsyncFunction: (asyncFunction) => {
      dispatch(asyncFunction);
    },
    fetchTodo: () => {
      dispatch(fetchTodosRequestedActionCreator());
    },
  };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
