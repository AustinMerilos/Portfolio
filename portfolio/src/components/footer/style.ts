import { styled } from "styled-components";

const FooterContainer = styled.section`
  background-color: lightblue;
  padding: 15%;
`;
const FooterItemContainer = styled.div`
  top: 1.39em;
  right: 3.41em;
  width: 22.223em;
  font-size: 1.1em;
`;
const NavLinks = styled.p`
  color: black;
`;
const ContactLink = styled.p`
  color: blue;
`;

const Title = styled.div`
  margin: 15px;
  font-size: 1em;
  line-height: 2.5;
  color: #cbc9e2;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;

export { Title, ContactLink, NavLinks, FooterItemContainer, FooterContainer };
