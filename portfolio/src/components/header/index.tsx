import React from "react";
import {
  HeaderSection,
  Title,
  Subtitle,
  Paragraph,
  HeaderContent,
  HeaderContainer,
} from "./style";

export default function Header() {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Title>Frontend Developer</Title>
        <Subtitle>
          like to craft solid and scalable frontend products with great user
          experiences.
        </Subtitle>
      </HeaderContainer>

      <HeaderContent>
        <Paragraph>
          like to craft solid and scalable frontend products with great user
          experiences.
        </Paragraph>
        <Paragraph>
          like to craft solid and scalable frontend products with great user
          experiences.
        </Paragraph>
      </HeaderContent>
    </HeaderSection>
  );
}
