import React, { useState } from "react";
import styled from "styled-components";

const TileContainer = styled.div`
  background-color: ${(props) =>
    props.isRevealed ? "aliceblue" : "lightgray"};
  width: ${(props) => `${props.theme.tileSize}px`};
  height: ${(props) => `${props.theme.tileSize}px`};
  border: ${(props) =>
    props.isHovered ? "1px solid black" : "1px solid transparent"};
`;

const Tile = ({ tile, revealLocation }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isRevealed = tile.revealed;

  return (
    <TileContainer
      onClick={revealLocation}
      isRevealed={isRevealed}
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isRevealed ? tile.icon : ""}
    </TileContainer>
  );
};

export default Tile;
