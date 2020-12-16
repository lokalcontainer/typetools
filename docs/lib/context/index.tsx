import { FC } from "react";
import { ThemeProvider } from "next-themes";

export const ProviderApp: FC = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
};
