import backgroundImages from "../assets/backgrounds";

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    title: string;
    titleOutline: string;
    button: string;
    secondTitle: string;
    text: string;
    background: string;
    menuButton: string;
    extraColor: string;
    imageOutline: string;
    accentText: string;
  };
}

const greenTheme: Theme = {
  colors: {
    primary: "#43766C",
    secondary: "#B19470",
    titleOutline: "rgba(113, 113, 113)",
    secondTitle: "black",
    text: "white",
    button: "black",
    title: "#F8FAE5",
    background: backgroundImages.greenBackGround,
    menuButton: "black",
    extraColor: "#76453B",
    imageOutline: "#76453B",
    accentText: "white",
  },
};

const khakieTheme: Theme = {
  colors: {
    primary: "#eae8dd",
    secondary: "#a8a09f",
    titleOutline: "rgba(0, 0, 0, 0.1)",
    secondTitle: "black",
    text: "black",
    button: "black",
    title: "#40d0ff",
    background: backgroundImages.khakiBackGround,
    menuButton: "black",
    extraColor: "#40d0ff",
    imageOutline: "#eae8dd",
    accentText: "black",
  },
};
const yellowTheme: Theme = {
  colors: {
    primary: "#f4f1bb",
    secondary: "#9bc1bc",
    titleOutline: "rgba(0, 0, 0, 0.3)",
    secondTitle: "black",
    text: "black",
    button: "black",
    title: "#ed6a5a",
    background: backgroundImages.yellowBackgGround,
    menuButton: "black",
    extraColor: "#ed6a5a",
    imageOutline: "#9bc1bc",
    accentText: "black",
  },
};

const lightTheme: Theme = {
  colors: {
    primary: "#f2efea",
    secondary: "#66d7d1",
    titleOutline: "rgba(0, 0, 0, 0.2)",
    secondTitle: "black",
    text: "black",
    button: "black",
    title: "#fc7753",
    background: backgroundImages.whiteBackGround,
    menuButton: "black",
    extraColor: "#fc7753",
    imageOutline: "#66d7d1",
    accentText: "black",
  },
};

const darkTheme: Theme = {
  colors: {
    primary: "#2e323a",
    secondary: "#4a9173",
    titleOutline: "rgba(0, 0, 0, 0.5)",
    secondTitle: "black",
    text: "#ecf0f1",
    button: "black",
    title: "#e14953",
    background: backgroundImages.blackBackGround,
    menuButton: "black",
    extraColor: "#e14953",
    imageOutline: "#4a9173",
    accentText: "black",
  },
};
const pinkTheme: Theme = {
  colors: {
    primary: "#e8998d",
    secondary: "#6c9a8b",
    titleOutline: "rgba(0, 0, 0, 0.1)",
    secondTitle: "black",
    text: "#f7fff7",
    button: "black",
    title: "#c7585c",
    background: backgroundImages.pinkThemeBackGround,
    menuButton: "black",
    extraColor: "#c7585c",
    imageOutline: "#6c9a8b",
    accentText: "black",
  },
};

export {
  lightTheme,
  darkTheme,
  greenTheme,
  khakieTheme,
  yellowTheme,
  pinkTheme,
};
