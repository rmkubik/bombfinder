import React from "react";
import styled from "styled-components";
import MoveGrid from "./MoveGrid";

const MovesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  align-items: center;

  li {
    margin-left: 8px;
  }
`;

const MovesList = ({ moves }) => {
  return (
    <MovesContainer>
      {moves.map((move, index) => (
        <li key={index}>
          <MoveGrid move={move} />
        </li>
      ))}
    </MovesContainer>
  );
};

export default MovesList;
