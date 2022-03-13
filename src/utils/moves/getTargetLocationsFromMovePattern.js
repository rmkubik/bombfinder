import { mapMatrix } from "functional-game-utils";

const getTargetLocationsFromMovePattern = (move) => {
  const patternLocations = mapMatrix((value, location) => {
    if (value === "x") {
      return location;
    }

    return undefined;
  }, move.pattern)
    .flat()
    .filter((location) => location !== undefined);

  return patternLocations;
};

export default getTargetLocationsFromMovePattern;
