import styles from "../font-tester.module.scss";
import { useFontTester } from "@/lib/context/ContextFontTester";

export const ConfigBaisc = () => {
  const { fontSize, setFontSize } = useFontTester();
  const FTConfig = [
    {
      id: "font-size",
      name: "Font Size",
      minValue: 12,
      maxValue: 200,
      step: 1,
      value: fontSize,
      onChange: setFontSize,
    },
  ];

  return (
    <>
      {FTConfig.map(
        ({ name, id, maxValue, minValue, step, value, onChange }, key) => (
          <div key={key} className={styles.slider}>
            <label htmlFor={id}>
              <span>{name}</span>
              <span>{value}</span>
            </label>
            <input
              id={id}
              title={`Set ${name}`}
              type="range"
              step={step}
              min={minValue}
              max={maxValue}
              value={value}
              onChange={(e) => onChange(e.target.valueAsNumber)}
            />
          </div>
        )
      )}
    </>
  );
};
