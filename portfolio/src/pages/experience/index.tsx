import { useTheme } from "../../utils/themeContext";
import Company from "./company";
import Education from "./education";
import { Container, Content, Title } from "./style";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <Content>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Title theme={theme}>Education</Title>
        </motion.div>
        <Education />
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Title theme={theme}>Professional Experience</Title>
        </motion.div>
        <Company />
      </Content>
    </Container>
  );
};

export default ExperiencePage;
