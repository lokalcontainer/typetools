import { useState, useEffect } from "react";

type Dimensions = {
  width: number;
  height: number;
};

export const useWindowSize = () => {
  const getInit = () => {
    if (typeof window !== "undefined" || typeof document !== "undefined") {
      const initWidth = window.innerWidth;
      const initHeight = window.innerHeight;
      return { width: initWidth, height: initHeight };
    }
    return { width: 1920, height: 1024 };
  };

  const htmlClass = "animation-stopper";

  const [stopper, setStopper] = useState<boolean>(false);
  const [{ width, height }, setWindowSize] = useState<Dimensions>({
    width: getInit().width,
    height: getInit().height,
  });

  let resizeTimer: any;
  useEffect(() => {
    const html = document.documentElement;

    const handler = () => {
      html.classList.add(htmlClass);
      setStopper(true);

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        html.classList.remove(htmlClass);
        setStopper(false);
      }, 1000);
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  return { width, height, stopper };
};
