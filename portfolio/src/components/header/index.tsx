import React from "react";
import {
  HeaderSection,
  Title,
  Subtitle,
  Paragraph,
  HeaderContent,
  HeaderContainer,
  HeadShot,
  Container,
} from "./style";
import images from "../../assets";
import { Theme } from "../../utils/themes";
import { useTheme } from "../../utils/themeContext";

export const Header: React.FC<{ theme: Theme }> = ({ theme }) => {
  const { toggleTheme } = useTheme();
  return (
    <HeaderSection theme={theme}>
      <div>
        <HeaderContainer>
          <Title>Hi I'm Austin! Frontend Developer</Title>
          <Subtitle>
            I like to craft solid and responsive frontend products with great
            user experiences.
          </Subtitle>
        </HeaderContainer>

        <HeaderContent>
          <Paragraph>
            Experience in building successful products that focus on users needs
            across different platforms.
          </Paragraph>
          <Paragraph>
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
