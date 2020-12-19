import { useTheme } from "next-themes";
import { SVGArrow } from "../SVG";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const themes = ["light", "dark", "worm", "system"];
  return (
    <>
      <div className="custom-select">
        <select
          value={theme}
          className="theme"
          aria-label="theme-switcher"
          onChange={(e) => setTheme(e.target.value)}
        >
          {themes.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span>
          <SVGArrow type="expand-more" />
        </span>
      </div>
    </>
  );
};
