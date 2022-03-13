import { constructMatrixFromTemplate } from "functional-game-utils";
import getNextId from "../utils/getNextId";

const items = {
  sword: {
    name: "Sword",
    moves: [
      {
        pattern: constructMatrixFromTemplate(
          (x) => x,
          `. . .
          x x x
          . . .`
        ),
      },
      {
        pattern: constructMatrixFromTemplate(
          (x) => x,
          `. . .
            x x x
            . . .`
        ),
      },
      {
        pattern: constructMatrixFromTemplate(
          (x) => x,
          `. x .
          . x .
          . x .`
        ),
      },
    ],
  },
  dagger: {
    name: "Dagger",
    moves: [
      {
        pattern: constructMatrixFromTemplate(
          (x) => x,
          `. . .
          . x .
          . . .`
        ),
      },
    ],
  },
};

const applyIdsAndKeys = (items) => {
  Object.entries(items).forEach(([itemKey, item]) => {
    item.id = getNextId();
    item.key = itemKey;

    item.moves = item.moves?.map((move) => {
      return {
        ...move,
        id: getNextId(),
      };
    });
  });
};

applyIdsAndKeys(items);

const startingInventory = {
  sword: items.sword,
  dagger: items.dagger,
};

export default items;
export { startingInventory };
