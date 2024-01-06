import { useState, useEffect } from "react";

interface mousePosInterface {
  x: number | null;
  y: number | null;
}

function useMousePosition() {
  const [mousePos, setMousePos] = useState<mousePosInterface>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePos);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  return mousePos;
}

export default useMousePosition;
