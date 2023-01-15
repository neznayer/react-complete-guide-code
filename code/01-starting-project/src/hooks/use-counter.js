import { useEffect, useState } from "react";

export const useCounter = (increment) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + increment);
    }, 1000);

    return () => clearInterval(interval);
  }, [increment]);

  return counter;
};
