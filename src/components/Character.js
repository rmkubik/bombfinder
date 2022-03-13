import React from "react";

const getCharacterIcon = (health) => {
  switch (health) {
    case 0:
      return "☠️";
    case 1:
      return "😬";
    case 2:
      return "🙂";
    default:
      return "😎";
  }
};

const Character = ({ health }) => {
  return <div>{getCharacterIcon(health)}</div>;
};

export default Character;
