import { motion, AnimatePresence } from "framer-motion";
import {
  ExpandButton,
  ExperienceContainer,
  ExperienceInnerContainer,
  GridContainer,
  SubTitle,
  Title,
  SkillContainer,
  SkillItem,
  CompanyLogo,
  InnerGridContainer,
  Website,
  Description,
  SubTitleContainer,
  ExperineceOutterContainer,
  WebsiteImage,
} from "./style";
import React, { useState } from "react";
import { AnimatedComponent } from "../../utils/animated";

const ExperienceSection = ({ experiences, theme }: any) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  return (
    <ExperienceContainer theme={theme}>
      <AnimatedComponent>
        <ExperineceOutterContainer>
          <Title theme={theme}>Professional Experience</Title>
          {experiences.map((experience: any, index: number) => (
            <div key={index}>
              <GridContainer theme={theme}>
                <SubTitle theme={theme}>{experience.title}</SubTitle>
                <SubTitleContainer>
                  <SubTitle theme={theme}>{experience.date}</SubTitle>
                  <ExpandButton onClick={() => handleButtonClick(index)}>
                    {expandedItem === index ? "-" : "+"}
                  </ExpandButton>
                </SubTitleContainer>
              </GridContainer>

              <AnimatePresence>
                {expandedItem === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExperienceInnerContainer>
                      <div key={index}>
                        <InnerGridContainer>
                          <div>
                            <WebsiteImage></WebsiteImage>
                            <Website href={experience.website}>
                              {experience.link}
                            </Website>

                            <Description>{experience.content}</Description>
                            {experience.skills && (
                              <div>
                                <SkillContainer>
                                  {experience.skills.map(
                                    (skill: string, j: number) => (
                                      <SkillItem key={j}>{skill}</SkillItem>
                                    )
                                  )}
                                </SkillContainer>
                              </div>
                            )}
                          </div>
                          <CompanyLogo
                            src={experience.image}
                            alt={`Company logo for ${experience.title}`}
                          />
                        </InnerGridContainer>
                      </div>
                    </ExperienceInnerContainer>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </ExperineceOutterContainer>
      </AnimatedComponent>
    </ExperienceContainer>
  );
};

export default ExperienceSection;
