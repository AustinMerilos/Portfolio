import { Link } from "@material-ui/core";
import { styled } from "styled-components";
import media from "../../utils/styleSizes";
import backgroundImages from "../../assets/backgrounds";

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  //background-image: url(${backgroundImages.footerBackGround});
  background-size: cover; /* Adjust as needed */
  background-position: center;

  padding: 12rem 19rem;
  ${media.mobile`
   padding: 2rem 0rem;

  `}
  ${media.tablet`
    padding:4rem 5rem;

  `}
`;
const FooterInnerContainer = styled.div`
  font-size: 1.1em;
  display: flex;

  ${media.mobile`
   font-size: 0.5em;

  `}
  ${media.tablet`
   font-size: 0.8em;

  `}
`;
const FooterItemContainer = styled.div`
  top: 1.39em;
  right: 3.41em;
  width: 22.223em;
  font-size: 1.1em;
  display: grid;
  color: ${(props) => props.theme.colors.text};
`;

const NavLinks = styled(Link)`
  && {
    color: black;
    text-decoration: none;
  }
`;
const CopyRight = styled.p`
  color: black;
`;
const ContactLink = styled(Link)``;
const Email = styled.a`
  color: ${(props) => props.theme.colors.title};
  text-decoration: none;
`;

const Title = styled.h2`
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
