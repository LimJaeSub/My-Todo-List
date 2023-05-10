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
  padding-left: 3%;
  display: flex;
  justify-content: space-between;
`;

const TodoLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const TodoWhat = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
`;
const TodoTime = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
`;
const TodoRight = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-right: 5%;
`;
const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  height: 35%;
`;
const CheckBox = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

function TodoList() {
  return (
    <Todo>
      <TodoLeft>
        <TodoWhat>여기내용임</TodoWhat>
        <TodoTime>여기시간</TodoTime>
      </TodoLeft>
      <TodoRight>
        <SelectBox>
          <div>삭제</div>
          <div>수정</div>
        </SelectBox>
        <CheckBox>체크박스</CheckBox>
      </TodoRight>
    </Todo>
  );
}

export default TodoList;
