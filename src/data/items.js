import { constructMatrixFromTemplate } from "functional-game-utils";

const items = {
  sword: {
    name: "Sword",
    moves: [
      constructMatrixFromTemplate(
        (x) => x,
        `. . .
       x x x
       . . .`
      ),
      constructMatrixFromTemplate(
        (x) => x,
        `. . .
       x x x
       . . .`
      ),
      constructMatrixFromTemplate(
        (x) => x,
        `. x .
       . x .
       . x .`
      ),
    ],
  },
  dagger: {
    name: "Dagger",
    moves: [
      constructMatrixFromTemplate(
        (x) => x,
        `. . .
       . x .
       . . .`
      ),
    ],
  },
};

const startingInventory = {
  sword: items.sword,
  dagger: items.dagger,
};

export default items;
export { startingInventory };
