import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BoardItem from "./BoardItem";
import { deleteBoard, selectBoard } from "../../redux/slices/boardSlice";
const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap:4px;
`;

function BoardList(props) {
    const boards = useSelector((state)=> state.board.boards)
    const selectedBoardId = useSelector((state) => state.board.selectedBoardId);

    const dispatch = useDispatch();

    return(
       <Wrapper>
        {boards.map((board, index)=> {
            const isSelected = board.id === selectedBoardId;
            return(
                <BoardItem
                key={index}
                board={board}
                isSelected={isSelected}
                onSelect={()=>{
                    dispatch(selectBoard(board.id));
                }}
                onDelete={()=>{
                    dispatch(deleteBoard(board.id))
                }}
                >

                </BoardItem>
            )
        })}
       </Wrapper>
    )
}

export default BoardList