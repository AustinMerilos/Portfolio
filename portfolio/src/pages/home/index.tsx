import { AboutSection } from "../../components/about";
import { ProjectSection } from "../../components/projects";
import ExperienceSection from "../../components/experience";
import CurrentlySection from "../../components/currently";
import { experiencesData } from "./constants";
import { Container } from "./style";
import { useTheme } from "../../utils/themeContext";
import { Header } from "../../components/header";

export default function Home() {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <Header theme={theme} />
      <AboutSection theme={theme} />
      <ExperienceSection theme={theme} experiences={experiencesData} />
      <ProjectSection theme={theme} />
      <CurrentlySection theme={theme} />
    </Container>
  );
}
