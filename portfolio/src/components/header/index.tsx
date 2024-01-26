import React from "react";
import {
  HeaderSection,
  Title,
  Subtitle,
  Paragraph,
  HeaderContent,
  HeaderContainer,
  HeadShot,
} from "./style";
import images from "../../assets";

export default function Header() {
  return (
    <HeaderSection>
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
      </div>

      <HeadShot src={images.headShot}></HeadShot>
    </HeaderSection>
  );
}
