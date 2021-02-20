import { createContext, useContext } from "react";

const theme = {
  light: {
    background: "#e5e5e5",
    primary: "#332f49",
    secondary: "#3f3d56",
    tertriary: "#f2f2f2",
  },

  dark: {
    background: "#3F3D56",
    primary: "#f2f2f2",
    secondary: "#f2f2f2",
    tertriary: "#f2f2f2",
  },
};

const ThemeContext = createContext(theme);

export function ThemeWrapper({ children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
