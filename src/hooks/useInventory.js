import React, { useState } from "react";

const useInventory = (startingInventory) => {
  const [inventory, setInventory] = useState(startingInventory);

  return { inventory };
};

export default useInventory;
