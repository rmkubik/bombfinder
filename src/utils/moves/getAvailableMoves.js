const getAvailableMoves = (allMoves, currentMoveId) =>
  allMoves.filter((move) => !move.used && move.id !== currentMoveId);

export default getAvailableMoves;
