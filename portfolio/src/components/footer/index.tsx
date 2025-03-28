import images from "../../assets/images";
import { AnimatedComponent } from "../../utils/animated";
import { useTheme } from "../../utils/themeContext";
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
  const emailAddress = "austin.merilos@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <FooterContainer theme={theme}>
      <AnimatedComponent>
        <FooterInnerContainer>
          <FooterItemContainer theme={theme}>
            <Title>Say Hello</Title>
            <Email
              href={`mailto:${emailAddress}`}
              onClick={handleEmailClick}
              theme={theme}
            >
              austin.merilos@gmail
            </Email>
          </FooterItemContainer>

          <FooterItemContainer theme={theme}>
            <NavLinks href="/resume.pdf" target="_blank">
              Résumé
            </NavLinks>
            <NavLinks href="/bio">About</NavLinks>
            <NavLinks href="/experience">Experience</NavLinks>
          </FooterItemContainer>
        </FooterInnerContainer>
        <Divider />

        <SocialContainer>
          <CopyRight>© Austin Merilos {new Date().getFullYear()}</CopyRight>
          <SocialInnerContainer>
            <ContactLink
              href="https://www.linkedin.com/in/austinmerilos"
              target="_blank"
            >
              <SocialImage src={images.linkedin} />
            </ContactLink>
            <ContactLink
              href="https://github.com/AustinMerilos"
              target="_blank"
            >
              <SocialImage src={images.github} />
            </ContactLink>
          </SocialInnerContainer>
        </SocialContainer>
      </AnimatedComponent>
    </FooterContainer>
  );
};
