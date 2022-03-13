import React from "react";
import styled from "styled-components";
import MovesList from "./MovesList";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const RowItem = styled.div`
  margin-right: 24px;
`;

const Moves = ({ currentMove, availableMoves, usedMoves, useReroll }) => {
  return (
    <>
      <h2>Moves</h2>
      <Row>
        <RowItem>
          <h3>Current</h3>
          <MovesList moves={currentMove ? [currentMove] : undefined} />
          <button onClick={useReroll}>Reroll</button>
        </RowItem>
        <RowItem>
          <h3>Available</h3>
          <MovesList moves={availableMoves} />
        </RowItem>
        <RowItem>
          <h3>Used</h3>
          <MovesList moves={usedMoves} />
        </RowItem>
      </Row>
    </>
  );
};

export default Moves;
