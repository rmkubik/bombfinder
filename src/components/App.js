import {
  compareLocations,
  mapMatrix,
  updateMatrix,
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

const dimensions = {
  width: 10,
  height: 10,
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
        ["💣", 10],
        ["💰", 5],
        ["🍗", 5],
        ["❤️", 2],
        ["🚪", 1],
        ["🏠", 1],
      ],
    })
  );
  const { heal, damage, health } = useHealth();
  const { inventory, usedMoves, availableMoves, currentMove, useCurrentMove } =
    useInventory(startingInventory);
  const [hoveredLocation, setHoveredLocation] = useState({ row: -1, col: -1 });

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

                useCurrentMove();
                setTiles(newTiles);
              }}
            />
          );
        }}
      />
      <Stats
        stats={{
          health: { name: "Health", value: health },
          rerolls: { name: "Rerolls", value: 2 },
          food: { name: "Food", value: 10 },
        }}
      />
      <Inventory inventory={inventory} />
      <Moves
        currentMove={currentMove}
        availableMoves={availableMoves}
        usedMoves={usedMoves}
      />
    </ThemeProvider>
  );
};

export default App;
