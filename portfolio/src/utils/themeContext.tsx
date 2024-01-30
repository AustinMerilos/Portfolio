// ThemeContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Theme,
  darkTheme,
  lightTheme,
  greenTheme,
  khakieTheme,
  yellowTheme,
  pinkTheme,
} from "./themes";

const ThemeContext = createContext<
  | {
      theme: Theme;
      toggleTheme: () => void;
    }
  | undefined
>(undefined);

const themes = [
  lightTheme,
  darkTheme,
  greenTheme,
  khakieTheme,
  yellowTheme,
  pinkTheme,
];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeIndex, setThemeIndex] = useState<number>(() => {
    // Load the theme from local storage, defaulting to the first theme
    const storedThemeIndex = parseInt(
      localStorage.getItem("themeIndex") || "0",
      10
    );
    return isNaN(storedThemeIndex) ? 0 : storedThemeIndex;
  });

  const theme = themes[themeIndex];

  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  useEffect(() => {
    // Save the current theme index to local storage
    localStorage.setItem("themeIndex", themeIndex.toString());
  }, [themeIndex]);

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
