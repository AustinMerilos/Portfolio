import React, { useEffect, useState } from "react";
import { Link } from "@material-ui/core";
import {
  ListItem,
  Title,
  ListContainer,
  NavButton,
  CloseButton,
  NavContainer,
  MenuButton,
  SocialImage,
} from "./styles";

import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
import images from "../../assets";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "visible";
    };

    handleBodyScroll(); // Initial setup

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

  return (
    <NavContainer>
      <NavButton onClick={() => setIsMenuOpen((open) => !open)}>
        <MenuButton />
      </NavButton>
      <ListContainer
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleCloseMenu}
      >
        <motion.div
          variants={menuVariants}
          animate={isMenuOpen ? "open" : "closed"}
          initial="closed"
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <CloseButton onClick={handleCloseMenu}>
              <CloseIcon />
            </CloseButton>
          </motion.div>
          <motion.div variants={itemVariants} transition={itemTransition}>
            <ListItem>
              <Link href="/" underline="none" color="inherit">
                Resume
              </Link>
            </ListItem>
          </motion.div>
          <motion.div variants={itemVariants} transition={itemTransition}>
            <ListItem>
              <Link href="/" underline="none" color="inherit">
                Experience
              </Link>
            </ListItem>
          </motion.div>
          <motion.div variants={itemVariants} transition={itemTransition}>
            <Title>Say Hello</Title>
          </motion.div>
          <motion.div variants={itemVariants} transition={itemTransition}>
            <ListItem>
              <Link href="/" underline="none" color="inherit">
                austin.merilos@gmail.com
              </Link>
            </ListItem>
          </motion.div>
          <motion.div variants={itemVariants} transition={itemTransition}>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/austinmerilos"
                underline="none"
                color="inherit"
              >
                <SocialImage src={images.linkedin} />
              </Link>
              <Link
                href="https://github.com/AustinMerilos"
                underline="none"
                color="inherit"
              >
                <SocialImage src={images.github} />
              </Link>
            </ListItem>
          </motion.div>
        </motion.div>
      </ListContainer>
    </NavContainer>
  );
};

export default NavMenu;
