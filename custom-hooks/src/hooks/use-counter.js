import { useState, useEffect } from "react";

const useCounter = (incrementFlag = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (incrementFlag) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [incrementFlag]);

  return counter;
};

export default useCounter;
