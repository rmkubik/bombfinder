import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import MoveGrid from "./MoveGrid";
import MovesList from "./MovesList";

const Moves = ({ inventory }) => {
  const allMoves = Object.values(inventory)
    .reduce((allMoves, item) => {
      if (item.moves) {
        return [...allMoves, item.moves];
      }
    }, [])
    .flat();

  const usedMoves = allMoves.filter((move) => move.used);
  const remainingMoves = allMoves.filter((move) => !move.used);

  console.log({ allMoves });

  return (
    <>
      <h2>Moves</h2>
      <h3>Current</h3>
      <h3>Remaining</h3>
      <MovesList moves={remainingMoves} />
      <h3>Used</h3>
      <MovesList moves={usedMoves} />
    </>
  );
};

export default Moves;
