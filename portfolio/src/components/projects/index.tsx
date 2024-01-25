import images from "../../assets";
import { projectData } from "./constants";
import SingleProject from "./singleProject";
import {
  BlurOverlay,
  ProjectContainer,
  ProjectInnerGrid,
  TextOverlay,
  Title,
} from "./style";

export function ProjectSection() {
  return (
    <ProjectContainer>
      <Title>Projects</Title>
      <ProjectInnerGrid>
        {projectData.map((project, index) => (
          <SingleProject
            key={index}
            link={project.link}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
        <BlurOverlay>
          <SingleProject
            link="nd"
            title="This project was completed as a code challenge in the interview process for a job. It's built with React & Next.js, it connects to the Guardian API to search for articles and the styling is done with Tailwind CSS"
            description=""
            image={images.upcomingProject}
          />
        </BlurOverlay>
        <TextOverlay>Coming soon</TextOverlay>
      </ProjectInnerGrid>
    </ProjectContainer>
  );
}
