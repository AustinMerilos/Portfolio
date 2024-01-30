export interface Paragraph {
  paragraph: {
    title: string;
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
  };
}
const paragraph: Paragraph = {
  paragraph: {
    title: "Currently working on:",
    first:
      "I'm actively seeking the next step in my career journey. I've been dedicated to enhancing my expertise in React development by undertaking and completing personal projects, ensuring that I stay well-versed in the latest industry trends.",
    second:
      " Prior to this, I engaged in online courses to strengthen my skills in frontend and fullstack development.In addition to web development, I aspire to broaden my capabilities in native environments as I advance.",
    third:
      "I've been contemplating the idea of delving into the Angular framework and potentially shifting my focus to enhance my proficiency in the Angular tech stack.",
    fourth:
      "I've recognized that I sometimes face challenges in effectively communicating my code and explaining my processes. Consequently, I am actively working on enhancing my ability to articulate technical concepts and share my insights more clearly.",
    fifth:
      "Furthermore, I'm preparing for the AWS Developer Certification, aiming to enhance my resume for potential job opportunities and gain a deeper understanding of AWS development.",
  },
};

export default paragraph;
