import React from "react";
import Grid from "./Grid";

const MoveGrid = ({ move }) => {
  return (
    <Grid
      tiles={move.pattern}
      renderTile={(char, location) => (
        <div key={JSON.stringify(location)}>{char}</div>
      )}
      theme={{
        gridGap: 0,
        tileSize: 12,
      }}
    />
  );
};

export default MoveGrid;
