import { useEffect, useState } from "react";

const useCounter = (incre) => {
  const [counter, setc] = useState(0);
  let tid;
  useEffect(() => {
    if (incre === true) {
      tid = setInterval(() => {
        setc((pr) => {
          return pr + 1;
        });
        console.log(counter);
      }, 1000);
    } else {
      tid = setInterval(() => {
        console.log(counter);
        setc((pr) => {
          return pr - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(tid);
    };
  }, []);

  return counter;
};

export default useCounter;
