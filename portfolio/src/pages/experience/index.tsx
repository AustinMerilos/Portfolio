import images from "../../assets";
import { useTheme } from "../../utils/themeContext";
import {
  CompanyImage,
  Container,
  Content,
  InnerContainer,
  Paragraph,
  Subtitle,
  Title,
} from "./style";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <Content>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Title theme={theme}>Education</Title>
        </motion.div>
        <InnerContainer>
          <div>
            <div>
              <Subtitle theme={theme}>
                Bachelor of Science in Computer Informatics
              </Subtitle>
              <Paragraph theme={theme}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Paragraph>
            </div>

            <div>
              <Subtitle theme={theme}>
                Bachelor of Liberal Arts in Communication
              </Subtitle>
              <Paragraph theme={theme}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Paragraph>
            </div>
          </div>

          <CompanyImage src={images.UlLogo} />
        </InnerContainer>

        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Title theme={theme}>Professional Experience</Title>
        </motion.div>

        <Subtitle theme={theme}>Jr. Software Engineer</Subtitle>
        <InnerContainer>
          <Paragraph theme={theme}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>

          <CompanyImage src={images.swimply} />
        </InnerContainer>

        <Subtitle theme={theme}>Freelance Contractor</Subtitle>
        <InnerContainer>
          <CompanyImage src={images.desktop} />
          <Paragraph theme={theme}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </InnerContainer>

        <Subtitle theme={theme}>Website Coordinator/IT Technician</Subtitle>
        <InnerContainer>
          <Paragraph theme={theme}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>
          <CompanyImage src={images.UlLogo} />
        </InnerContainer>
      </Content>
    </Container>
  );
};

export default ExperiencePage;
