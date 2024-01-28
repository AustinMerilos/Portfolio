// themes.ts
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    lightText: string;
    darkText: string;
    // Add other color properties as needed
  };
}

const greenTheme: Theme = {
  colors: {
    primary: "#cdf7e5",
    secondary: "#0c486c",
    darkText: "black",
    lightText: "#1abc9c",
  },
};

const coralTheme: Theme = {
  colors: {
    primary: "#ff9899",
    secondary: "#0c486c",
    darkText: "black",
    lightText: "white",
  },
};
const yellowTheme: Theme = {
  colors: {
    primary: "#f4f7cd",
    secondary: "#2c3e50",
    darkText: "black",
    lightText: "#1abc9c",
  },
};

const lightTheme: Theme = {
  colors: {
    primary: "#ecf0f1",
    secondary: "#1693a5",
    darkText: "#2c3e50",
    lightText: "#ecf0f1",
  },
};

// Additional theme 1
const darkTheme: Theme = {
  colors: {
    primary: "#0c486c",
    secondary: "#f4f7cd",
    darkText: "#ecf0f1",
    lightText: "#333",
    // Add other color properties for theme1
  },
};
const lightBlueTheme: Theme = {
  colors: {
    primary: "#1693a5",
    secondary: "#f4f7cd",
    darkText: "#ecf0f1",
    lightText: "#333",
    // Add other color properties for theme1
  },
};

export {
  lightTheme,
  darkTheme,
  greenTheme,
  coralTheme,
  yellowTheme,
  lightBlueTheme,
};
