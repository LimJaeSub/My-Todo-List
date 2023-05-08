import React from "react";
import styled from "styled-components";

const SearchBarWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
`;
const Style = styled.input`
  border: none;
  border-radius: 30px;
  background-color: #d9d9d9;
  width: 80%;
  height: 100px;
  margin-top: 20px;
  font-size: 40px;
  font-family: "Jua";
`;

function SearchBar() {
  return (
    <SearchBarWrap>
      <Style />
    </SearchBarWrap>
  );
}

export default SearchBar;
