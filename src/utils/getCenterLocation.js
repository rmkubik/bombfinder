import { getDimensions } from "functional-game-utils";

const getCenterLocation = (matrix) => {
  const dimensions = getDimensions(matrix);

  return {
    row: Math.floor(dimensions.height / 2),
    col: Math.floor(dimensions.width / 2),
  };
};

export default getCenterLocation;
