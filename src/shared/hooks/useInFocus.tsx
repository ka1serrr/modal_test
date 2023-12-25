import { useEffect, useRef } from "react";

export const useInFocus = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref?.current) {
      ref.current.focus();
    }
  }, []);

  return ref;
};
