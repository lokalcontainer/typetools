import { useRef, useState, useEffect } from "react";
import Resize from "resize-observer-polyfill";

export const useMeasure = () => {
  const IS_BROWSER = typeof window !== "undefined";
  const ref = useRef<Element>();

  const [bounds, set] = useState<{
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
  }>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const [ro] = useState(
    () => IS_BROWSER && new Resize(([entry]) => set(entry.contentRect))
  );

  useEffect(() => {
    if (!ro) return;
    if (!ref.current) return;
    ro.observe(ref.current);

    return () => ro.disconnect();
  }, []);

  return { ref, bounds };
};
