import { Menu, MenuItem, IconButton } from "@material-ui/core";
import styled from "styled-components";

export const ListContainer = styled(Menu)`
  top: 1.39em;
  right: 3.41em;
  width: 22.223em;
  font-size: 1.1em;
  position: absolute;
`;
export const ListItem = styled(MenuItem)`
  && {
    color: black;
    background-color: white;
    margin-left: 150px;
  }
`;
export const NavButton = styled(IconButton)`
  && {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }
`;
export const CloseButton = styled(IconButton)`
  && {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Title = styled.div`
  margin: 15px;
  font-size: 1em;
  line-height: 2.5;
  color: #cbc9e2;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;
