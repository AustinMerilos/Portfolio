import { motion, AnimatePresence } from "framer-motion";
import {
  ExpandButton,
  ExperienceContainer,
  ExperienceInnerContainer,
  GridContainer,
  SubTitle,
  Title,
} from "./style";
import React, { useState } from "react";
import images from "../../assets";

const ExperienceSection = ({ experiences }: any) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  return (
    <ExperienceContainer>
      <Title>Work History</Title>
      {experiences.map((experience: any, index: number) => (
        <div key={index}>
          <GridContainer>
            <SubTitle>{experience.title}</SubTitle>
            <SubTitle>{experience.date}</SubTitle>
            <ExpandButton onClick={() => handleButtonClick(index)}>
              {expandedItem === index ? "-" : "+"}
            </ExpandButton>
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
                    <p>{experience.name}</p>
                    <img
                      src={experience.image}
                      alt={`Experience  for ${experience.title}`}
                    />
                    {experience.content.map((paragraph: string, i: number) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    {experience.skills && (
                      <div>
                        <p>Skills:</p>
                        <div>
                          {experience.skills.map((skill: string, j: number) => (
                            <p key={j}>{skill}</p>
                          ))}
                        </div>
                      </div>
                    )}
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
