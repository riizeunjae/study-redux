import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { toggleFinishTodo, deleteTodo } from "../../redux/slices/todoSlice";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`;

function TodoList() {
    const selectedBoardId = useSelector((state) => state.board.selectedBoardId);
    const selectedBoardTodos = useSelector((state) => {
        return state.todo.boardTodosMap[selectedBoardId];
    });
    const dispatch = useDispatch() 

    if(!selectedBoardTodos) {
        return null;
    }
// stopPropagation => click event가 다른 곳으로 전파되지 않게 하기 위해서..
    return (
        <Wrapper>
            {selectedBoardTodos.map((todo, index) => {
                return (
                   <TodoItem
                   key={index}
                   todo={todo}
                   onFinish={(event) => {
                    event.stopPropagation();
                    dispatch(toggleFinishTodo({
                        boardId: selectedBoardId,
                        todoId: todo.id
                    }));
                   }}
                   onDelete={(event) =>{
                    event.stopPropagation();

                    dispatch(
                        deleteTodo({
                            boardId: selectedBoardId,
                            todoId: todo.id
                                       })
                                  )
                             }}
                          />
                     );
                   })}
                </Wrapper>
                );
}
export default TodoList