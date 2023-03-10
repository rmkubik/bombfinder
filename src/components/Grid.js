import React from "react";
import { getDimensions, mapMatrix } from "functional-game-utils";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `${props.theme.tileSize}px `.repeat(props.width)};
  line-height: ${(props) => `${props.theme.tileSize}px`};
  text-align: center;
  cursor: pointer;
  grid-gap: ${(props) => `${props.theme.gridGap}px`};
`;

const Grid = ({ tiles, renderTile = () => {}, theme }) => {
  const { width } = getDimensions(tiles);

  return (
    <GridContainer
      width={width}
      theme={theme}
      onContextMenu={(event) => event.preventDefault()}
    >
      {mapMatrix((tile, location) => renderTile(tile, location), tiles)}
    </GridContainer>
  );
};

export default Grid;
