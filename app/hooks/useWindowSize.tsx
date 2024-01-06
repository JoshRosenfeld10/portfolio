import { useState, useEffect } from "react";

interface windowSize {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
