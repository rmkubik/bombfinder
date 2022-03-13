import React, { useState } from "react";
import styled from "styled-components";

const getBorder = (props) => {
  if (props.isHovered) {
    return "1px solid black";
  } else if (props.isTargeted) {
    return "1px dashed black";
  }

  return "1px solid transparent";
};

const TileContainer = styled.div`
  background-color: ${(props) =>
    props.isRevealed ? "aliceblue" : "lightgray"};
  width: ${(props) => `${props.theme.tileSize}px`};
  height: ${(props) => `${props.theme.tileSize}px`};
  border: ${getBorder};
`;

const Tile = ({
  tile,
  revealLocation,
  isHovered,
  isTargeted,
  setIsHovered,
}) => {
  const isRevealed = tile.revealed;

  return (
    <TileContainer
      onClick={revealLocation}
      isRevealed={isRevealed}
      isHovered={isHovered}
      isTargeted={isTargeted}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isRevealed ? tile.icon : ""}
    </TileContainer>
  );
};

export default Tile;
