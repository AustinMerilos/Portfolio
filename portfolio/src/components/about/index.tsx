import images from "../../assets";
import {
  AboutContainer,
  ReadMore,
  SkillItem,
  SubBio,
  SubBioTitle,
  Title,
  BioContainer,
  GridContainer,
  Image,
  InnerContainer,
} from "./style";

const skillData = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "React" },
  { id: 3, name: "CSS" },
  { id: 4, name: "HTML" },
  { id: 5, name: "TypeScript" },
  { id: 6, name: "React Native" },
  { id: 7, name: "Next.js" },
  { id: 8, name: "SQL" },
  { id: 9, name: "Microsoft Suite" },
  { id: 10, name: "Jira" },
  { id: 11, name: "Yarn" },
  { id: 12, name: "KeyStone" },
  { id: 13, name: "Adobe Creative Suite" },
  { id: 14, name: "Slack" },
  { id: 15, name: "Visual Studio Code" },
  { id: 16, name: "CMS" },
  // Add more skills as needed
];

export function AboutSection() {
  return (
    <>
      <AboutContainer>
        <Title>My Skills</Title>
        <Image src={images.aboutImage}></Image>
        <InnerContainer>
          <GridContainer>
            {skillData.map((skill) => (
              <SkillItem key={skill.id}>{skill.name}</SkillItem>
            ))}
          </GridContainer>

          <BioContainer>
            <SubBioTitle>A little about me</SubBioTitle>
            <SubBio>
              Software Engineer with a demonstrated history of working with web
              and mobile applications. Strong programming and communication
              professional with a bachelor's degree focused in Computer
              Informatics and a 2nd bachelor's in Mass Communication from The
              University of Louisiana at Lafayette. I hope to learn and gain
              experience from the growing industry of technology and
              communication.
            </SubBio>
            <ReadMore href="/bio">Read more</ReadMore>
          </BioContainer>
        </InnerContainer>
      </AboutContainer>
    </>
  );
}
