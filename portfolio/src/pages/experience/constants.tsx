import images from "../../assets/images";

const eductaionData = [
  {
    educationTitle:
      "B.S in Computer Informatics - University of Louisiana at Lafaytte May 2020",
    educationHeading: "Relevant Coursework/projects:",
    education:
      "Collaborated with a group of peers to develop a supervised machine learning algorithm in Python aimed at identifying instances of Medicare fraud for a local software company. Designed a Python script to extract data from CSV files and generate predictions using a random forest algorithm. Applied Agile Methodologies, integrating daily stand-ups, retrospectives, and scrum meetings into our development workflow. Utilized Jira project management software to generate tickets and monitor project deadlines. Established a Medicare fraud database with PostgreSQL and crafted a UI mockup and presentation using Tableau.",
  },
  {
    educationTitle:
      "B.A in Mass Communication - University of Louisiana at Lafaytte December 2018",
    educationHeading: "Relevant Coursework/projects:",
    education:
      "Contributed to diverse projects encompassing audio and video production. Produced student documentaries and news reels, managing camera and stage equipment. Utilized video and audio editing software Adobe Premiere and Audition, wrote scripts and storyboards, and oversaw the production of news reels. Conducted numerous interviews for news projects, gaining insights into legal aspects such as liability and relevant laws associated with news reporting.",
  },
];
const companyData = [
  {
    companyTitle: "Jr. Software Engineer @ Swimply",
    image: images.swimply,
    company:
      "Swimply, headquartered in Los Angeles, California, is a startup that operates a platform enabling people to rent private swimming pools for their enjoyment. Users can book pools through the website or mobile app, facilitating a connection between pool owners and individuals looking for a private and personalized swimming experience. I initially started as a contractor and was hired full time in which my role involved developing features and resolving issues for both web and mobile platforms. Coded in Typescript and JavaScript with React, utilizing hooks. Executed software changes based on specific design specifications on Figma. Added tracking events with Segment tracking to collect user data for informed product decisions. Implemented and updated components under the direction of Senior Software Engineers. Worked in an agile environment with daily stand-ups, retrospectives, sprints, and scrums. Conducted quality assurance, reviewed, committed, and approved pull requests using Git workflow on GitHub.",
  },
  {
    companyTitle: "Freelance Contractor",
    image: images.screen,

    company:
      "Reverse-engineered the Ignite CLI boilerplate, which involved recreating an existing app called Painscored in a different framework within a React Native environment. Painscored was an app that allowed physicians to keep in contact with their patients and diagnose their pain levels. Coded in JavaScript and used MobX for state management. Engaged in shadowing, paired programming, and designing UI mockups for various screens. Implemented React Native packages for navigation and mapping functionality. Participated in code reviews, followed Git workflow, and contributed to sprint retros with the lead developer. Conducted Android and iOS builds on simulators. This project spanned four months, after which I eventually commenced an 8-month contract with Swimply the following year.",
  },
  {
    companyTitle:
      "Website Coordinator/IT Technician @ ULL Office of STEP Support",
    image: images.UlLogo,

    company:
      "As a member of the Student Technology Enhancement Program (STEP) at the University of Louisiana at Lafayette, my role involved enhancing campus technology and smart classrooms. I employed Adobe Creative Suite to craft designs and edit training videos. I was responsible for formatting the website according to campus guidelines, designing pages to match the university's style. Additionally, I managed content using the Drupal 7 framework, updated the inventory database, and collaborated with co-workers through Microsoft Teams.",
  },
];

export { eductaionData, companyData };
