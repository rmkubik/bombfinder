import React, { useState } from "react";
import getAvailableMoves from "../utils/moves/getAvailableMoves";
import getUsedMoves from "../utils/moves/getUsedMoves";
import pickRandomlyFromArray from "../utils/pickRandomlyFromArray";

const useInventory = (startingInventory) => {
  const [inventory, setInventory] = useState(startingInventory);

  const allMoves = Object.values(inventory)
    .reduce((allMoves, item) => {
      if (item.moves) {
        return [...allMoves, item.moves];
      }
    }, [])
    .flat();

  const [currentMoveId, setCurrentMoveId] = useState(allMoves[0].id);
  const currentMove = allMoves.find((move) => move.id === currentMoveId);

  const useCurrentMove = () => {
    currentMove.used = true;

    let newCurrentMoveId = undefined;
    let availableMoves = getAvailableMoves(allMoves, newCurrentMoveId);

    // if no available moves, mark all used moves as un-used
    if (availableMoves.length === 0) {
      allMoves.forEach((move) => {
        move.used = false;
      });

      availableMoves = getAvailableMoves(allMoves, newCurrentMoveId);
    }

    newCurrentMoveId = pickRandomlyFromArray(availableMoves).id;
    setCurrentMoveId(newCurrentMoveId);
  };

  return {
    inventory,
    currentMove,
    useCurrentMove,
    allMoves,
    usedMoves: getUsedMoves(allMoves),
    availableMoves: getAvailableMoves(allMoves, currentMoveId),
  };
};

export default useInventory;
