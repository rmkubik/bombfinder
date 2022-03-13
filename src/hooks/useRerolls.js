import { useState } from "react";

const useRerolls = (defaultValue) => {
  const [maxRerolls, setMaxRerolls] = useState(defaultValue);
  const [rerolls, setRerolls] = useState(maxRerolls);

  const useReroll = () => {
    setRerolls(rerolls - 1);
  };

  return { rerolls, maxRerolls, useReroll };
};

export default useRerolls;
