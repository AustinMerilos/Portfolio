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
} from "./style";
import React, { useState } from "react";

const ExperienceSection = ({ experiences }: any) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  return (
    <ExperienceContainer>
      <Title>Professional Experience</Title>
      {experiences.map((experience: any, index: number) => (
        <div key={index}>
          <GridContainer>
            <SubTitle>{experience.title}</SubTitle>
            <SubTitleContainer>
              <SubTitle>{experience.date}</SubTitle>
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
    </ExperienceContainer>
  );
};

export default ExperienceSection;
