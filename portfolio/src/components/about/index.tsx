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
  { id: 6, name: "Next.js" },
  { id: 6, name: "SQL" },
  // Add more skills as needed
];

export function AboutSection() {
  return (
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
            I started playing with computers when I was 11 years-old. Since then
            I have been tinkering with all sorts of technologies that in some
            way or another led me to work on music, photography, sound
            engineering, electric engineering, automation, video production,
            feature film post-production, VR games, and 3D sound.
          </SubBio>
          <ReadMore>Read more</ReadMore>
        </BioContainer>
      </InnerContainer>
    </AboutContainer>
  );
}
