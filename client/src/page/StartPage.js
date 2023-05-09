import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const StartPageWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 60px;
  font-family: "Jua";
`;
const Startbtn = styled.button`
  background-color: #00adb5;
  border-radius: 30px;
  border: none;
  width: 252px;
  height: 97px;
  font-size: 40px;
  color: white;
  font-family: "Jua";
  cursor: "pointer";
`;

function StartPage() {
  const navigate = useNavigate();
  const goToStart = () => {
    navigate("/main");
  };
  return (
    <StartPageWrap>
      <Title>MY TODO LIST</Title>
      <Startbtn onClick={goToStart}>시작하기</Startbtn>
    </StartPageWrap>
  );
}

export default StartPage;
