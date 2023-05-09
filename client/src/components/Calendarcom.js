import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendarcom.css";
import styled from "styled-components";

const TodayDiv = styled.div`
  border: none;
  border-radius: 30px;
  background-color: #71c9ce;
  text-align: center;
  width: 70%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-family: "Jua";
`;
function Calendarcom() {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  // 날짜 상태 업데이트 함수
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendarwrap">
      {/* 오늘 날짜 */}
      <TodayDiv>Today : {today.toDateString()}</TodayDiv>
      <Calendar onChange={handleDateChange} value={date} locale="en-us" />
      {/* 선택된 날짜 */}
      {/* <p>SelectDate : {date.toDateString()}</p> */}
    </div>
  );
}

export default Calendarcom;
