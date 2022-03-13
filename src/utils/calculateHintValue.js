import {
  getAllDirections,
  getLocation,
  getNeighbors,
} from "functional-game-utils";

const getTileHintValue = (tile) => {
  switch (tile.icon) {
    case "💣":
      return -1;
    case "":
      return 0;
    default:
      return 1;
  }
};

const calculateHintValue = (tiles, location) => {
  const neighbors = getNeighbors(getAllDirections, tiles, location);

  let hintValue = 0;
  neighbors.forEach((neighborLocation) => {
    const neighbor = getLocation(tiles, neighborLocation);

    hintValue += getTileHintValue(neighbor);
  });

  return hintValue;
};

export default calculateHintValue;
