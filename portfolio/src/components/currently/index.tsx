import React from "react";
import {
  CurrentlyContainer,
  CurrentlyContainerInnerContainer,
  Image,
  SubTitle,
  TextContainer,
  Title,
} from "./styles";
import images from "../../assets/images";
import { Theme } from "../../utils/themes";
import { AnimatedComponent } from "../../utils/animated";
import { motion } from "framer-motion";
import paragraph from "./constants";

const CurrentlySection: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <CurrentlyContainer theme={theme}>
      <AnimatedComponent>
        <CurrentlyContainerInnerContainer>
          <TextContainer>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Title theme={theme}>{paragraph.paragraph.title}</Title>
            </motion.div>
            <SubTitle theme={theme}>{paragraph.paragraph.first}</SubTitle>
            <SubTitle theme={theme}>{paragraph.paragraph.second}</SubTitle>
            <SubTitle theme={theme}>{paragraph.paragraph.third}</SubTitle>
            <SubTitle theme={theme}>{paragraph.paragraph.fourth}</SubTitle>
            <SubTitle theme={theme}>{paragraph.paragraph.fifth}</SubTitle>
          </TextContainer>

          <Image src={images.desktop} theme={theme} />
        </CurrentlyContainerInnerContainer>
      </AnimatedComponent>
    </CurrentlyContainer>
  );
};

export default CurrentlySection;
