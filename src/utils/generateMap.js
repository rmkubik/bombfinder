import {
  constructMatrix,
  mapMatrix,
  updateMatrix,
} from "functional-game-utils";

import shuffle from "./shuffle";

const generateMap = ({ dimensions, populationTable = [] }) => {
  let map = constructMatrix(() => {
    return { icon: "" };
  }, dimensions);

  const mapLocations = mapMatrix((_, location) => location, map).flat();
  let shuffledLocations = shuffle(mapLocations);

  const totalSpawnCount = populationTable.reduce(
    (totalCount, [value, count]) => {
      return totalCount + count;
    },
    0
  );

  if (totalSpawnCount > shuffledLocations.length) {
    console.error(
      "Invalid item counts! More specified than existing locations!"
    );
  }

  populationTable.forEach(([tile, count]) => {
    const tileLocations = shuffledLocations.splice(0, count);

    tileLocations.forEach((location) => {
      map = updateMatrix(location, { icon: tile }, map);
    });
  });

  // Reveal any houses
  map = mapMatrix((tile) => {
    if (tile.icon === "🏠") {
      return { ...tile, revealed: true };
    }

    return tile;
  }, map);

  return map;
};

export default generateMap;
