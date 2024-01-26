import images from "../../assets";
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

export default function Footer() {
  const emailAddress = "austin.merilos@gmail";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterItemContainer>
          <Title>Say Hello</Title>
          <Email href={`mailto:${emailAddress}`} onClick={handleEmailClick}>
            austin.merilos@gmail
          </Email>
        </FooterItemContainer>

        <FooterItemContainer>
          <NavLinks>Resume</NavLinks>
          <NavLinks>Experience</NavLinks>
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
    </FooterContainer>
  );
}
