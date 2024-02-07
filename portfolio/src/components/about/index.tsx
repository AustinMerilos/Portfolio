import images from "../../assets/images";
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
import { Theme } from "../../utils/themes";
import { AnimatedComponent } from "../../utils/animated";
import { motion } from "framer-motion";

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
];

export const AboutSection: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <div>
      <AnimatedComponent>
        <AboutContainer>
          <div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Title theme={theme}> My Skills</Title>
            </motion.div>
          </div>
          <svg>
            <Image src={images.aboutImage} theme={theme}></Image>
          </svg>

          <InnerContainer>
            <GridContainer>
              {skillData.map((skill) => (
                <SkillItem key={skill.id} theme={theme}>
                  {skill.name}
                </SkillItem>
              ))}
            </GridContainer>

            <BioContainer theme={theme}>
              <SubBioTitle>A little about me</SubBioTitle>
              <SubBio>
                I've always enjoyed discovering new creative activities to
                occupy my time, this passion has guided me through diverse
                projects, including videography, audio & video production, IT
                services, and finally software engineering. As an engineer, my
                experience encompasses web and mobile applications, showcasing
                strong programming skills and effective communication.
              </SubBio>
              <ReadMore href="/bio" theme={theme}>
                Read more
              </ReadMore>
            </BioContainer>
          </InnerContainer>
        </AboutContainer>
      </AnimatedComponent>
    </div>
  );
};
