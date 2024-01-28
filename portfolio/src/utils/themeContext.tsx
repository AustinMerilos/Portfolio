// ThemeContext.js
import React, { createContext, useContext, useState } from "react";
import {
  Theme,
  darkTheme,
  lightTheme,
  greenTheme,
  coralTheme,
  yellowTheme,
  lightBlueTheme,
} from "./themes"; // Import your Theme interface

// themeContext.tsx
const ThemeContext = createContext<
  { theme: Theme; toggleTheme: () => void } | undefined
>(undefined);

const themes = [
  lightTheme,
  darkTheme,
  greenTheme,
  coralTheme,
  yellowTheme,
  lightBlueTheme,
];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeIndex, setThemeIndex] = useState<number>(0);
  const theme = themes[themeIndex];

  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
