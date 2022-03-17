import {
  compareLocations,
  getLocation,
  mapMatrix,
} from "functional-game-utils";
import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import useHealth from "../hooks/useHealth";
import generateMap from "../utils/generateMap";
import Grid from "./Grid";
import Tile from "./Tile";
import Stats from "./Stats";
import Inventory from "./Inventory";
import Moves from "./Moves";
import { startingInventory } from "../data/items";
import useInventory from "../hooks/useInventory";
import getTargetLocationsFromMove from "../utils/getTargetLocationsFromMove";
import calculateHintValue from "../utils/calculateHintValue";
import useRerolls from "../hooks/useRerolls";
import Character from "./Character";

const dimensions = {
  width: 8,
  height: 8,
};
const theme = {
  tileSize: 48,
  gridGap: 8,
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    margin: ${(props) => `${props.theme.gridGap}px`};
  }
`;

const App = () => {
  const [tiles, setTiles] = useState(
    generateMap({
      dimensions,
      populationTable: [
        ["💣", 9],
        ["💰", 4],
        ["🍗", 4],
        ["❤️", 1],
        ["🩸", 3],
        ["🚪", 1],
        // ["🏠", 1],
      ],
    })
  );
  const { heal, damage, setHealth, health, maxHealth } = useHealth();
  const { inventory, usedMoves, availableMoves, currentMove, useCurrentMove } =
    useInventory(startingInventory);
  const [hoveredLocation, setHoveredLocation] = useState({ row: -1, col: -1 });
  const [food, setFood] = useState(10);
  const { rerolls, maxRerolls, useReroll } = useRerolls(2);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid
        tiles={tiles}
        renderTile={(tile, location) => {
          const isHovered = compareLocations(hoveredLocation, location);
          const targetLocations = getTargetLocationsFromMove(
            currentMove,
            hoveredLocation
          );
          const compareToTileLocation = compareLocations(location);
          const isTargeted = targetLocations.some(compareToTileLocation);

          return (
            <Tile
              tile={tile}
              key={JSON.stringify(location)}
              isHovered={isHovered}
              isTargeted={isTargeted}
              hintValue={calculateHintValue(tiles, location)}
              setIsHovered={(newIsHovered) => {
                if (newIsHovered) {
                  setHoveredLocation(location);
                } else if (isHovered) {
                  setHoveredLocation({ row: -1, col: -1 });
                }
              }}
              revealLocation={() => {
                const newTiles = mapMatrix((tile, location) => {
                  const compareToLocation = compareLocations(location);

                  if (targetLocations.some(compareToLocation)) {
                    return { ...tile, revealed: true };
                  }

                  return tile;
                }, tiles);

                const newHealth = targetLocations.reduce(
                  (currentHealth, location) => {
                    const tile = getLocation(newTiles, location);

                    if (tile.icon === "💣") {
                      return currentHealth - 1;
                    }

                    if (tile.icon === "🩸") {
                      return currentHealth + 1;
                    }

                    return currentHealth;
                  },
                  health
                );

                setFood(food - 1);
                setHealth(newHealth);
                useCurrentMove();
                setTiles(newTiles);
              }}
            />
          );
        }}
      />
      <Character health={health} />
      <Stats
        stats={{
          health: { name: "Health", value: health, max: maxHealth },
          rerolls: { name: "Rerolls", value: rerolls, max: maxRerolls },
          food: { name: "Food", value: food },
        }}
      />
      <Inventory inventory={inventory} />
      <Moves
        rerolls={rerolls}
        useReroll={() => {
          useCurrentMove();
          useReroll();
        }}
        currentMove={currentMove}
        availableMoves={availableMoves}
        usedMoves={usedMoves}
      />
    </ThemeProvider>
  );
};

export default App;
