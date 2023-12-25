import { useEffect, useState } from "react";

export const useTimer = (initialTime?: number) => {
  const [time, setTime] = useState<number>(initialTime || 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
        }
        return time > 0 ? (time -= 1) : time;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
};
