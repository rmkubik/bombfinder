const addOffsetToLocations = (offset, locations) => {
  return locations.map((location) => {
    return {
      row: location.row + offset.row,
      col: location.col + offset.col,
    };
  });
};

export default addOffsetToLocations;
