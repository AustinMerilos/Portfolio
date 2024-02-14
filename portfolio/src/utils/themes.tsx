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
  };
}

const greenTheme: Theme = {
  colors: {
    primary: "#43766C",
    secondary: "#B19470",
    titleOutline: "rgba(113, 113, 113)",
    secondTitle: "white",
    text: "white",
    button: "white",
    title: "#F8FAE5",
    background: backgroundImages.greenBackGround,
    menuButton: "black",
    extraColor: "#76453B",
    imageOutline: "#76453B",
  },
};

const khakieTheme: Theme = {
  colors: {
    primary: "#eae8dd",
    secondary: "#a8a09f",
    titleOutline: "rgba(0, 0, 0, 0.1)",
    secondTitle: "white",
    text: "black",
    button: "white",
    title: "#40d0ff",
    background: backgroundImages.khakiBackGround,
    menuButton: "white",
    extraColor: "#40d0ff",
    imageOutline: "#eae8dd",
  },
};
const yellowTheme: Theme = {
  colors: {
    primary: "#f4f1bb",
    secondary: "#9bc1bc",
    titleOutline: "rgba(0, 0, 0, 0.3)",
    secondTitle: "white",
    text: "black",
    button: "white",
    title: "#ed6a5a",
    background: backgroundImages.yellowBackgGround,
    menuButton: "white",
    extraColor: "#ed6a5a",
    imageOutline: "#9bc1bc",
  },
};

const lightTheme: Theme = {
  colors: {
    primary: "#f2efea",
    secondary: "#66d7d1",
    titleOutline: "rgba(0, 0, 0, 0.2)",
    secondTitle: "white",
    text: "black",
    button: "white",
    title: "#fc7753",
    background: backgroundImages.whiteBackGround,
    menuButton: "white",
    extraColor: "#fc7753",
    imageOutline: "#66d7d1",
  },
};

const darkTheme: Theme = {
  colors: {
    primary: "#2e323a",
    secondary: "#6cd4be",
    titleOutline: "rgba(0, 0, 0, 0.3)",
    secondTitle: "white",
    text: "#ecf0f1",
    button: "white",
    title: "#c2292f",
    background: backgroundImages.blackBackGround,
    menuButton: "white",
    extraColor: "#c2292f",
    imageOutline: "#6cd4be",
  },
};
const pinkTheme: Theme = {
  colors: {
    primary: "#e8998d",
    secondary: "#6c9a8b",
    titleOutline: "rgba(0, 0, 0, 0.1)",
    secondTitle: "white",
    text: "#f7fff7",
    button: "white",
    title: "#c7585c",
    background: backgroundImages.pinkThemeBackGround,
    menuButton: "white",
    extraColor: "#c7585c",
    imageOutline: "#6c9a8b",
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
