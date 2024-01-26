import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import media from "../../utils/styleSizes";

const NavContainer = styled.div`
  background-color: transparent;
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 1000;
  ${media.mobile`
   

  `}
  ${media.tablet`
    

  `}
`;
const NavButtonsContainer = styled.div`
  display: flex;
  gap: 75%;
  ${media.mobile`
   

  `}
  ${media.tablet`
    

  `}
`;

const ListContainer = styled(Menu)`
  && {
    top: 1.39em !important;
    right: 3.41em !important;
    width: 22.223em !important;
    font-size: 1.1em !important;
  }
`;

const ListItem = styled(MenuItem)`
  && {
    color: black;
    background-color: white;
    margin-left: 150px;
  }
`;
const SocialContainer = styled.div``;
const NavButton = styled(IconButton)`
  && {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }
`;
const MenuButton = styled(MenuIcon)`
  && {
    width: 50px;
    height: 50px;
    color: #1b2e35;
  }
`;
const CloseButton = styled(IconButton)`
  && {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }
`;

const Title = styled.div`
  margin: 15px;
  font-size: 1em;
  line-height: 2.5;
  color: #cbc9e2;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;

const SocialImage = styled.img`
  margin: 5px;
  border-radius: 5px;
  height: 25px;
  object-fit: cover;
`;

export {
  SocialImage,
  NavButton,
  NavContainer,
  Title,
  CloseButton,
  MenuButton,
  ListContainer,
  ListItem,
  SocialContainer,
  NavButtonsContainer,
};
