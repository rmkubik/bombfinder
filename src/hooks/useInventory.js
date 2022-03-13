import React, { useState } from "react";

const useInventory = (startingInventory) => {
  const [inventory, setInventory] = useState(startingInventory);
  const [currentMove, setCurrentMove] = useState();

  return { inventory, currentMove };
};

export default useInventory;
