import { useTheme } from "../../utils/themeContext";
import bioData from "./constants";
import { motion } from "framer-motion";

import {
  Container,
  Content,
  Image,
  InnerContainer,
  Paragraph,
  Subtitle,
  Title,
} from "./style";
import { AnimatedComponent } from "../../utils/animated";

const BioPage = () => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <Content>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Title theme={theme}>I have always loved tech</Title>
        </motion.div>

        {bioData.map((data) => (
          <AnimatedComponent>
            <Subtitle theme={theme}>{data.title}</Subtitle>
            <InnerContainer>
              <Image theme={theme} src={data.image2} />
              <div>
                <Paragraph theme={theme}>{data.paragraph1}</Paragraph>
                <Paragraph theme={theme}>{data.paragraph2}</Paragraph>
              </div>

              <Image theme={theme} src={data.image} />
            </InnerContainer>
          </AnimatedComponent>
        ))}
      </Content>
    </Container>
  );
};

export default BioPage;
