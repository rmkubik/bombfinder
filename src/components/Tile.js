import React from "react";
import styled from "styled-components";

const HiddenTile = styled.div`
  background-color: lightgray;
  width: ${(props) => `${props.theme.tileSize}px`};
  height: ${(props) => `${props.theme.tileSize}px`};
`;

const RevealedTile = styled.div`
  background-color: aliceblue;
`;

const Tile = ({ tile, revealLocation }) => {
  if (tile.revealed) {
    return <RevealedTile>{tile.icon}</RevealedTile>;
  }

  return <HiddenTile onClick={revealLocation} />;
};

export default Tile;
