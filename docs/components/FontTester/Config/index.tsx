import styles from "../font-tester.module.scss";
import { useVariableFont } from "@/lib/context/ContextVariable";
import { ConfigBaisc } from "./ConfigBaisc";

export const Config = () => {
  const { VFAxis, VFConfig, setVFConfig } = useVariableFont();

  return (
    <aside className={styles.config}>
      <div
        style={{
          height: "4rem",
          borderBottom: "1px solid",
          display: "flex",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        Config
      </div>
      <div className={styles.sliders}>
        <ConfigBaisc />

        <div
          className={styles.sliders_variable}
          data-split={VFAxis && VFAxis.length > 4}
        >
          {VFAxis ? (
            <>
              {VFAxis.map(
                (
                  { tag, minValue, maxValue, defaultValue, name },
                  key: number
                ) => (
                  <div key={key} className={styles.slider}>
                    <label htmlFor={`${tag}-${key}`}>
                      <span>{name.en}</span>
                      <span>{(VFConfig[tag] || defaultValue).toFixed(0)}</span>
                    </label>
                    <input
                      id={`${tag}-${key}`}
                      title={`Set ${tag}`}
                      type="range"
                      step={0.01}
                      min={minValue}
                      max={maxValue}
                      value={VFConfig[tag] || defaultValue}
                      onDoubleClick={() => {
                        // @ts-ignore
                        setVFConfig((prev) => ({
                          ...prev,
                          [tag]: defaultValue,
                        }));
                      }}
                      onChange={(e) => {
                        // @ts-ignore
                        setVFConfig((prev) => ({
                          ...prev,
                          [tag]: e.target.valueAsNumber,
                        }));
                      }}
                    />
                  </div>
                )
              )}
            </>
          ) : (
            <div>No Axes</div>
          )}
        </div>
      </div>
    </aside>
  );
};
