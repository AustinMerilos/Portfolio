import {
  ContactLink,
  FooterContainer,
  FooterItemContainer,
  NavLinks,
  Title,
} from "./style";

export default function Footer() {
  return (
    <FooterContainer>
      <Title>Say Hello</Title>
      <ContactLink>email</ContactLink>
      <ContactLink>social</ContactLink>
      <FooterItemContainer>
        <NavLinks>My Projects</NavLinks>
        <NavLinks>Resume</NavLinks>
        <NavLinks>Experience</NavLinks>
      </FooterItemContainer>
    </FooterContainer>
  );
}
