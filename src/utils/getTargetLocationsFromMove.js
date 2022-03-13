import addOffsetToLocations from "./addOffsetToLocations";
import getCenterLocation from "./getCenterLocation";
import invertLocation from "./invertLocation";
import getTargetLocationsFromMovePattern from "./moves/getTargetLocationsFromMovePattern";

const getTargetLocationsFromMove = (move, targetLocation) => {
  const patternTargetLocations = getTargetLocationsFromMovePattern(move);
  let targetLocations = addOffsetToLocations(
    targetLocation,
    patternTargetLocations
  );

  const patternCenterLocation = getCenterLocation(move.pattern);
  const patternCenterOffset = invertLocation(patternCenterLocation);
  targetLocations = addOffsetToLocations(patternCenterOffset, targetLocations);

  return targetLocations;
};

export default getTargetLocationsFromMove;
