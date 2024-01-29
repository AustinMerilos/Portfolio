import images from "../../assets";
import { AnimatedComponent } from "../../utils/animated";
import { useTheme } from "../../utils/themeContext";
import { Theme } from "../../utils/themes";
import {
  ContactLink,
  CopyRight,
  Divider,
  Email,
  FooterContainer,
  FooterInnerContainer,
  FooterItemContainer,
  NavLinks,
  SocialContainer,
  SocialImage,
  SocialInnerContainer,
  Title,
} from "./style";

export const Footer = () => {
  const { theme } = useTheme();
  const emailAddress = "austin.merilos@gmail";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <FooterContainer theme={theme}>
      <AnimatedComponent>
        <FooterInnerContainer>
          <FooterItemContainer theme={theme}>
            <Title>Say Hello</Title>
            <Email href={`mailto:${emailAddress}`} onClick={handleEmailClick}>
              austin.merilos@gmail
            </Email>
          </FooterItemContainer>

          <FooterItemContainer theme={theme}>
            <NavLinks>Resume</NavLinks>
            <NavLinks href="/experience">Experience</NavLinks>
            <NavLinks>Something</NavLinks>
          </FooterItemContainer>
        </FooterInnerContainer>
        <Divider />

        <SocialContainer>
          <CopyRight>© Austin Merilos 2024</CopyRight>
          <SocialInnerContainer>
            <ContactLink href="https://www.linkedin.com/in/austinmerilos">
              <SocialImage src={images.linkedin} />
            </ContactLink>
            <ContactLink href="https://github.com/AustinMerilos">
              <SocialImage src={images.github} />
            </ContactLink>
          </SocialInnerContainer>
        </SocialContainer>
      </AnimatedComponent>
    </FooterContainer>
  );
};
