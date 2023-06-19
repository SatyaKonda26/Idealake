import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      ["resize", "load"].forEach((e) => {
        window.addEventListener(e, handleResize);
      });

      handleResize();

      return () => window.removeEventListener(["resize", "load"], handleResize);
    }
  }, []);
  return windowSize;
};

export default useWindowSize;
