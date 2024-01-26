// themes.ts

import { createGlobalStyle } from "styled-components";

// themes.ts
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    // Add other color properties as needed
  };
}

const lightTheme: Theme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#ecf0f1",
    text: "#333",
  },
};

const darkTheme: Theme = {
  colors: {
    primary: "#1abc9c",
    secondary: "#e74c3c",
    background: "#2c3e50",
    text: "#ecf0f1",
    // Add other color properties for the dark theme
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.medium};
    
  }
`;

export { lightTheme, darkTheme, GlobalStyle };
