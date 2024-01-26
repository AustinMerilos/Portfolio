import images from "../../assets";
import { projectData } from "./constants";
import SingleProject from "./singleProject";
import {
  BlurOverlay,
  BlurOverlayContainer,
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
            title={project.title}
            description={project.description}
            image={project.image}
            source={project.source}
            liveSource={project.liveSource}
          />
        ))}
        <BlurOverlayContainer>
          <BlurOverlay>
            <SingleProject
              title="This project was completed as a code challenge in the interview process for a job. It's built with React & Next.js, it connects to the Guardian API to search for articles and the styling is done with Tailwind CSS"
              description=""
              image={images.upcomingProject}
              source=""
            />
          </BlurOverlay>
          <TextOverlay>Coming soon</TextOverlay>
        </BlurOverlayContainer>
      </ProjectInnerGrid>
    </ProjectContainer>
  );
}
