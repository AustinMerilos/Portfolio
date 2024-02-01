import React, { useEffect, useState } from "react";
import { Link, Menu } from "@material-ui/core";
import {
  ListItem,
  Title,
  NavButton,
  NavContainer,
  MenuButton,
  SocialImage,
  MenuOpenedButton,
  ButtonContainer,
  Button,
  ThemeIcon,
} from "./styles";

import { motion } from "framer-motion";
import images from "../../assets/images";
import { useTheme } from "../../utils/themeContext";

const NavMenu = () => {
  const { theme } = useTheme();
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "visible";
    };

    handleBodyScroll();

    window.addEventListener("scroll", handleBodyScroll);

    return () => {
      window.removeEventListener("scroll", handleBodyScroll);
    };
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      },
    },
    open: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const itemTransition = { opacity: { duration: 0.2 } };

  const emailAddress = "austin.merilos@gmail";
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <>
      <NavContainer theme={theme}>
        <NavButton onClick={() => setIsMenuOpen((open) => !open)} theme={theme}>
          <MenuButton theme={theme} />
        </NavButton>
      </NavContainer>

      <Menu
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleCloseMenu}
      >
        <>
          <motion.div
            variants={menuVariants}
            animate={isMenuOpen ? "open" : "closed"}
            initial="closed"
          >
            <motion.div variants={itemVariants} transition={itemTransition}>
              <ButtonContainer>
                <Button onClick={toggleTheme} theme={theme}>
                  <ThemeIcon theme={theme} />
                </Button>
                <Button onClick={handleCloseMenu} theme={theme}>
                  <MenuOpenedButton theme={theme} />
                </Button>
              </ButtonContainer>
            </motion.div>

            <motion.div variants={itemVariants} transition={itemTransition}>
              <ListItem>
                <Link href="/" underline="none" color="inherit">
                  Home
                </Link>
              </ListItem>
            </motion.div>
            <motion.div variants={itemVariants} transition={itemTransition}>
              <ListItem>
                <Link
                  underline="none"
                  color="inherit"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé
                </Link>
              </ListItem>
            </motion.div>
            <motion.div variants={itemVariants} transition={itemTransition}>
              <ListItem>
                <Link href="/bio" underline="none" color="inherit">
                  About
                </Link>
              </ListItem>
            </motion.div>
            <motion.div variants={itemVariants} transition={itemTransition}>
              <ListItem>
                <Link href="/experience" underline="none" color="inherit">
                  Experience
                </Link>
              </ListItem>
            </motion.div>
            <motion.div variants={itemVariants} transition={itemTransition}>
              <Title>Say Hello</Title>
            </motion.div>

            <motion.div variants={itemVariants} transition={itemTransition}>
              <ListItem>
                <Link
                  href={`mailto:${emailAddress}`}
                  onClick={handleEmailClick}
                  underline="none"
                  color="inherit"
                >
                  austin.merilos@gmail.com
                </Link>
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants} transition={itemTransition}>
              <div>
                <Link
                  href="https://www.linkedin.com/in/austinmerilos"
                  target="_blank"
                >
                  <SocialImage src={images.linkedin} />
                </Link>
                <Link href="https://github.com/AustinMerilos" target="_blank">
                  <SocialImage src={images.github} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </>
      </Menu>
    </>
  );
};

export default NavMenu;
