import React from "react";
import styled from "styled-components";

const Todo = styled.div`
  border: none;
  border-radius: 30px;
  background-color: #8785a2;
  width: 80%;
  height: 150px;
  line-height: 150px;
  font-family: "Jua";
`;
function TodoList() {
  return <Todo>냉무</Todo>;
}

export default TodoList;
