import { MenuItem, IconButton } from "@material-ui/core";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PaletteSharpIcon from "@mui/icons-material/PaletteSharp";

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

const ListItem = styled(MenuItem)`
  && {
    color: black;
    background-color: white;
    margin-left: 150px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 60%;
`;
const NavButton = styled(IconButton)`
  && {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    background-color: ${(props) => props.theme.colors.title};
  }
`;
const MenuButton = styled(MenuIcon)`
  && {
    width: 50px;
    height: 50px;
    color: ${(props) => props.theme.colors.menuButton};

    ${media.mobile`
     width: 20px;
     height: 20px;
   

  `}
  }
`;

const Button = styled(IconButton)`
  && {
    margin-left: 10px;
  }
`;

const MenuOpenedButton = styled(MenuOpenIcon)`
  && {
    width: 50px;
    height: 50px;
    color: ${(props) => props.theme.colors.extraColor};
  }
`;
const ThemeIcon = styled(PaletteSharpIcon)`
  && {
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.colors.extraColor};
  }
`;

const Title = styled.div`
  margin: 15px;
  font-size: 1em;
  line-height: 2.5;
  color: #cbc9e2;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
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
  Button,
  MenuButton,
  ListItem,
  ButtonContainer,
  MenuOpenedButton,
  ThemeIcon,
};
