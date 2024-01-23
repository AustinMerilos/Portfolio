// Example
import React, { useState } from "react";
import { Link } from "@material-ui/core";
import {
  ListItem,
  Title,
  ListContainer,
  NavButton,
  CloseButton,
  NavContainer,
} from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <NavButton onClick={() => setIsMenuOpen(true)}>
        <MenuIcon />
      </NavButton>
      <ListContainer
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
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
                My Projects
              </Link>
            </ListItem>
          </motion.div>
          <motion.div variants={itemVariants} transition={itemTransition}>
            <Title>Say Hello</Title>
          </motion.div>
          <motion.div variants={itemVariants} transition={itemTransition}>
            <ListItem>
              <Link href="/" underline="none" color="inherit">
                Email
              </Link>
            </ListItem>
          </motion.div>
          <motion.div variants={itemVariants} transition={itemTransition}>
            <ListItem>
              <Link href="/" underline="none" color="inherit">
                Socials
              </Link>
            </ListItem>
          </motion.div>
        </motion.div>
      </ListContainer>
    </NavContainer>
  );
};

export default NavMenu;
