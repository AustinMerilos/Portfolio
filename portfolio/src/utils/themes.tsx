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
  };
}

const greenTheme: Theme = {
  colors: {
    primary: "#cdf7e5",
    secondary: "#c2b280",
    titleOutline: "black",
    secondTitle: "white",
    text: "black",
    button: "white",
    title: "#1abc9c",
    background: backgroundImages.greenBackGround,
  },
};

const khakieTheme: Theme = {
  colors: {
    primary: "#eae8dd",
    secondary: "#948775",
    titleOutline: "white",
    secondTitle: "white",
    text: "4a382a",
    button: "white",
    title: "#305d9d",
    background: backgroundImages.khakiBackGround,
  },
};
const yellowTheme: Theme = {
  colors: {
    primary: "#f4f1bb",
    secondary: "#9bc1bc",
    titleOutline: "black",
    secondTitle: "white",
    text: "black",
    button: "white",
    title: "#ed6a5a",
    background: backgroundImages.yellowBackgGround,
  },
};

const lightTheme: Theme = {
  colors: {
    primary: "#f2efea",
    secondary: "#66d7d1",
    titleOutline: "white",
    secondTitle: "white",
    text: "black",
    button: "white",
    title: "#fc7753",
    background: backgroundImages.whiteBackGround,
  },
};

const darkTheme: Theme = {
  colors: {
    primary: "#2e323a",
    secondary: "#6cd4be",
    titleOutline: "#46666e",
    secondTitle: "white",
    text: "#ecf0f1",
    button: "white",
    title: "#c2292f",
    background: backgroundImages.blackBackGround,
  },
};
const lightBlueTheme: Theme = {
  colors: {
    primary: "#4ecdc4",
    secondary: "#f7fff7",
    titleOutline: "white",
    secondTitle: "black",
    text: "#f7fff7",
    button: "black",
    title: "#1a535c",
    background: backgroundImages.lightBlueBackGround,
  },
};

export {
  lightTheme,
  darkTheme,
  greenTheme,
  khakieTheme,
  yellowTheme,
  lightBlueTheme,
};
