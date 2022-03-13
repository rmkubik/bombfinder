import React from "react";
import styled from "styled-components";
import MovesList from "./MovesList";

const Moves = ({ currentMove, availableMoves, usedMoves, useReroll }) => {
  return (
    <>
      <h2>Moves</h2>
      <h3>Current</h3>
      <MovesList moves={currentMove ? [currentMove] : undefined} />
      <button onClick={useReroll}>Reroll</button>
      <h3>Available</h3>
      <MovesList moves={availableMoves} />
      <h3>Used</h3>
      <MovesList moves={usedMoves} />
    </>
  );
};

export default Moves;
