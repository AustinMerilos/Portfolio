import images from "../../assets/images";

export const projectData = [
  {
    title: "Personal Website",
    description:
      "Interested in how I created this website? Check out the code! The goal of this website was to play around with styling and animation along with creating a professonal portfolio website for myself to showcase my skills and talents for future job prospects.",
    image: images.aboutImage,
    source: "/",
    liveSource: "/",
  },
  {
    title: "LiteraryLane",
    description: `Completed this project for the Wes Bos's Fullstack Advanced React & GraphQL. It uses GraphQL API with Node.js on the backend and Next.Js with React & Apollo on the front end, I also added a few of my own styles and components for this online book store.`,
    image: images.literaryLane,
    source: "https://github.com/AustinMerilos/LiteraryLane",
  },
  {
    title: "Homestead",
    description:
      "This project was built from scratch using React and typscript to create a real estate website with a searchbar,image carousel and navigation bar. Styling is used with Material UI and style components. The data used is from the Bayut api from rapidapi.",
    image: images.homeStead,
    source: "https://github.com/AustinMerilos/Homestead",
    liveSource: "https://homestead-f2c3a.web.app",
  },
  {
    title: "GoldenFoodie",
    description:
      "This project was my first project as a way for me to get familiar with React class components and state management, it utilizes google Firebase Authentication, connects to the Edamam API to search for food recipes and the styling is done with CSS.",
    image: images.goldenFoodie,
    source: "https://github.com/AustinMerilos/GoldenFoodie",
    liveSource: "https://goldenfoodie-98be5.web.app/",
  },
];
