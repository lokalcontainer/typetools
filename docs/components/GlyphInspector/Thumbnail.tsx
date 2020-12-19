import { useMeasure } from "@/lib/hooks/useMeasure";
import styles from "./glyph.module.scss";

export const Thumbnail = () => {
  const {
    ref: parentRef,
    bounds: { width: parentWidth },
  } = useMeasure();

  const divideBy = 4;

  const arr = Array(100).fill({
    width: parentWidth / divideBy,
    height: parentWidth / divideBy,
  });
  return (
    <div
      // @ts-ignore
      ref={parentRef}
      className={styles.thumbnail}
    >
      <header className="theme">Glyph Thumbnail</header>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {arr.map(({ width, height }, key) => {
          const isLast = (key + 1) % divideBy === 0;
          return (
            <span
              key={key}
              style={{
                width,
                height,
                borderRight: isLast ? "none" : "1px solid",
                borderTop: "1px solid",
                fontSize: 10,
              }}
            >
              {key + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};
