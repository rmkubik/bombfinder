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
  if (!moves || moves.length === 0) {
    return null;
  }

  return (
    <MovesContainer>
      {moves.map((move) => (
        <li key={move.id}>
          <MoveGrid move={move} />
        </li>
      ))}
    </MovesContainer>
  );
};

export default MovesList;
