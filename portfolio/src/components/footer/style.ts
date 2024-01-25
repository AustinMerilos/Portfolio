import { Link } from "@material-ui/core";
import { styled } from "styled-components";

const FooterContainer = styled.section`
  background-color: #59e4a8;
  padding: 12rem 19rem;
`;
const FooterInnerContainer = styled.div`
  font-size: 1.1em;
  display: flex;
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
const CopyRight = styled.p`
  color: black;
`;
const ContactLink = styled(Link)``;
const Email = styled(Link)``;

const Title = styled.div`
  margin: 15px;
  font-size: 1em;
  line-height: 2.5;
  color: white;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #000;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialInnerContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const SocialImage = styled.img`
  margin: 5px;
  height: 25px;
  object-fit: cover;
`;

export {
  Title,
  ContactLink,
  NavLinks,
  FooterItemContainer,
  FooterContainer,
  Divider,
  FooterInnerContainer,
  SocialImage,
  CopyRight,
  SocialContainer,
  SocialInnerContainer,
  Email,
};
