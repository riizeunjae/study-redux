import { useState } from "react";

function TodoApp(props) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h3>오늘 할 일</h3>
      <ul></ul>
      <div>
        <input
          value={newTodo}
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />
        <button>할 일 추가</button>
        <button>할 일 삭제</button>
        <button>모두 삭제</button>
      </div>
    </div>
  );
}

export default TodoApp;
