import React, { useEffect, useState } from "react";
import { Link, Menu } from "@material-ui/core";
import {
  ListItem,
  Title,
  ListContainer,
  NavButton,
  CloseButton,
  NavContainer,
  MenuButton,
  SocialImage,
  SocialContainer,
  NavButtonsContainer,
} from "./styles";

import CloseIcon from "@material-ui/icons/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { motion } from "framer-motion";
import images from "../../assets";

const NavMenu = () => {
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
      <NavContainer>
        <NavButton onClick={() => setIsMenuOpen((open) => !open)}>
          <MenuButton />
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
            <NavButtonsContainer>
              <motion.div variants={itemVariants} transition={itemTransition}>
                <Link href="/" underline="none" color="inherit">
                  Austin Merilos
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} transition={itemTransition}>
                <CloseButton onClick={handleCloseMenu}>
                  <MenuOpenIcon />
                </CloseButton>
              </motion.div>
            </NavButtonsContainer>

            <motion.div variants={itemVariants} transition={itemTransition}>
              <ListItem>
                <Link href="/" underline="none" color="inherit">
                  Resume
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
              <SocialContainer>
                <Link href="https://www.linkedin.com/in/austinmerilos">
                  <SocialImage src={images.linkedin} />
                </Link>
                <Link href="https://github.com/AustinMerilos">
                  <SocialImage src={images.github} />
                </Link>
              </SocialContainer>
            </motion.div>
          </motion.div>
        </>
      </Menu>
    </>
  );
};

export default NavMenu;
