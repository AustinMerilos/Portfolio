import images from "../../assets/images";
import { AnimatedComponent } from "../../utils/animated";
import { Theme } from "../../utils/themes";
import { projectData } from "./constants";
import SingleProject from "./singleProject";
import { motion } from "framer-motion";

import {
  BlurOverlay,
  BlurOverlayContainer,
  ProjectContainer,
  ProjectInnerGrid,
  TextOverlay,
  Title,
} from "./style";

export const ProjectSection: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <ProjectContainer theme={theme}>
      <AnimatedComponent>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <div>
            <Title theme={theme}>Projects</Title>
          </div>
        </motion.div>

        <ProjectInnerGrid>
          {projectData.map((project, index) => (
            <SingleProject
              theme={theme}
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
                theme={theme}
                title=""
                description=""
                image={images.upcomingProject}
                source=""
              />
            </BlurOverlay>

            <TextOverlay>Coming soon</TextOverlay>
          </BlurOverlayContainer>
        </ProjectInnerGrid>
      </AnimatedComponent>
    </ProjectContainer>
  );
};
