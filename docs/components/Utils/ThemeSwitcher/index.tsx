import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { themes, theme, setTheme } = useTheme();
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {themes.map((val: string, key: number) => (
        <option key={key} value={val}>
          {val}
        </option>
      ))}
    </select>
  );
};
