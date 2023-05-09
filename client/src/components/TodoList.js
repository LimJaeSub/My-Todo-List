import React from "react";
import styled from "styled-components";

const Todo = styled.div`
  border: none;
  border-radius: 30px;
  background-color: #8785a2;
  width: 80%;
  height: 150px;
  font-family: "Jua";
  margin-left: 3%;
`;
const whatTodo = styled.div``;
function TodoList() {
  return (
    <Todo>
      <div className="Todoleft">
        <div>
          <div>여기내용임</div>
          <div>여기시간</div>
        </div>
      </div>
      <div className="TodoRight">
        <div className="selectbox">
          <div>삭제</div>
          <div>수정</div>
        </div>
        <div>체크박스</div>
      </div>
    </Todo>
  );
}

export default TodoList;
