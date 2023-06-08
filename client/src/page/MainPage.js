import React from "react";
import styled from "styled-components";
import Calendarcom from "../components/Calendarcom";
import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";
import AddTodoButton from "../components/AddTodoButton";

const MainPageWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
const SideNav = styled.section`
  margin-top: 1%;
  margin-bottom: 1%;
  margin-right: 0;
  background-color: #393e46;
  border: none;
  border-radius: 30px;
  width: 25%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const ContentSection = styled.section`
  position: relative;
  background-color: #393e46;
  border: none;
  border-radius: 30px;
  width: 70%;
  height: 95vh;
  margin-top: 1%;
  margin-bottom: 1%;
`;
const TopicList = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 10px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center; */
`;
const TopicDiv = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  border: none;
  border-radius: 30px;
  background: #eaeaea;
  text-align: center;

  /* 크기 및 위치 */
  width: 80%;
  height: 50px;
  line-height: 50px;

  /* font */
  font-size: 25px;
  font-family: "Jua";
`;
const ListDiv = styled.div`
  width: 100%;
  height: 70%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;

function MainPage() {
  return (
    <MainPageWrap>
      <SideNav>
        <Calendarcom />
        <TopicList>
          <TopicDiv># 공부</TopicDiv>
          <TopicDiv># 업무</TopicDiv>
          <TopicDiv># 약속</TopicDiv>
          {/* TopicDiv는 배열로 따서 map으로 구현할 것 */}
        </TopicList>
      </SideNav>
      <ContentSection>
        <AddTodoButton />
        <SearchBar />
        <ListDiv>
          <TodoList />
          <TodoList />
          <TodoList />
          {/* TodoList는 배열로 따서 구현할 것 */}
        </ListDiv>
      </ContentSection>
    </MainPageWrap>
  );
}

export default MainPage;
