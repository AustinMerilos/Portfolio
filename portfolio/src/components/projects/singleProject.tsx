import { AnimatedComponent } from "../../utils/animated";
import { Theme } from "../../utils/themes";
import {
  ProjectDescription,
  ProjectImage,
  ProjectLinkGrid,
  ProjectLinks,
  ProjectTitle,
  SingleProjectContainer,
} from "./style";

type SingleProjectItems = {
  title?: string;
  image?: string;
  description?: string;
  source: string;
  liveSource?: string;
  theme: Theme;
};

export default function SingleProject({
  title,
  image,
  description,
  source,
  liveSource,
  theme,
}: SingleProjectItems) {
  return (
    <AnimatedComponent>
      <SingleProjectContainer theme={theme}>
        <ProjectImage src={image} />
        <ProjectTitle theme={theme}>{title}</ProjectTitle>
        <ProjectDescription theme={theme}>{description}</ProjectDescription>
        <ProjectLinkGrid>
          {source && (
            <ProjectLinks href={source} theme={theme}>
              GitHub
            </ProjectLinks>
          )}
          {liveSource && (
            <ProjectLinks href={liveSource} theme={theme}>
              Live Demo
            </ProjectLinks>
          )}
        </ProjectLinkGrid>
      </SingleProjectContainer>
    </AnimatedComponent>
  );
}
