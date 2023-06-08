import React from "react";
import styled from "styled-components";

const AddButton = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 100px;
  font-size: 30px;
  text-align: center;
  z-index: 999;
`;
function AddTodoButton() {
  return <AddButton>+</AddButton>;
}

export default AddTodoButton;
