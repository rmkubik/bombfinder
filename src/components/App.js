import { updateMatrix } from "functional-game-utils";
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
  const { inventory } = useInventory(startingInventory);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid
        tiles={tiles}
        renderTile={(tile, location) => (
          <Tile
            tile={tile}
            key={JSON.stringify(location)}
            revealLocation={() => {
              const newTiles = updateMatrix(
                location,
                { ...tile, revealed: true },
                tiles
              );

              setTiles(newTiles);
            }}
          />
        )}
      />
      <Stats stats={{ health: { name: "Health", value: health } }} />
      <Inventory inventory={inventory} />
      <Moves inventory={inventory} />
    </ThemeProvider>
  );
};

export default App;
