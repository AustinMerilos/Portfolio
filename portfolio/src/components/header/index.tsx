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
          <Title>Frontend Developer</Title>
          <Subtitle>
            I like to craft solid and scalable frontend products with great user
            experiences.
          </Subtitle>
        </HeaderContainer>

        <HeaderContent>
          <Paragraph>
            Proven experience building successful products for clients across
            several countries.
          </Paragraph>
          <Paragraph>
            Highly skilled at progressive enhancement, design systems & UI
            Engineering.
          </Paragraph>
        </HeaderContent>
      </div>

      <HeadShot src={images.headShot}></HeadShot>
    </HeaderSection>
  );
}
