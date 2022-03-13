const invertLocation = (location) => {
  return {
    row: -location.row,
    col: -location.col,
  };
};

export default invertLocation;
