import { useState } from "react";

const useHealth = () => {
  const [maxHealth, setMaxHealth] = useState(3);
  const [health, setHealth] = useState(maxHealth);

  const damage = (value) => {
    setHealth(health - value);
  };

  const heal = (value) => {
    const newHealth = Math.min(maxHealth, health + value);
    setHealth(newHealth);
  };

  return { health, damage, heal };
};

export default useHealth;
