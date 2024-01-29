import React from "react";
import {
  HeaderSection,
  Title,
  Subtitle,
  Paragraph,
  HeaderContent,
  HeaderContainer,
  HeadShot,
  Name,
} from "./style";
import images from "../../assets";
import { Theme } from "../../utils/themes";
import { useTheme } from "../../utils/themeContext";
import { motion } from "framer-motion";

export const Header: React.FC<{ theme: Theme }> = ({ theme }) => {
  const { toggleTheme } = useTheme();

  return (
    <HeaderSection theme={theme}>
      <div>
        <HeaderContainer>
          <>
            <Name theme={theme}>Hi I'm Austin! Frontend</Name>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Title theme={theme}>Developer</Title>
            </motion.div>
          </>

          <Subtitle theme={theme}>
            I like to craft solid and responsive frontend products with great
            user experiences.
          </Subtitle>
        </HeaderContainer>

        <HeaderContent>
          <Paragraph theme={theme}>
            Experience in building successful products that focus on users needs
            across different platforms.
          </Paragraph>
          <Paragraph theme={theme}>
            Highly skilled at react enhancement, design systems & UI
            Engineering.
          </Paragraph>
        </HeaderContent>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>

      <HeadShot src={images.headShot}></HeadShot>
    </HeaderSection>
  );
};
