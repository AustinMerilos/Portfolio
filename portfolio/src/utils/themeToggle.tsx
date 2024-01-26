import React from "react";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

interface ThemeToggleProps {
  onClick: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onClick }) => {
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

  return (
    <NavButton onClick={onClick}>
      <MenuButton />
    </NavButton>
  );
};

export default ThemeToggle;
