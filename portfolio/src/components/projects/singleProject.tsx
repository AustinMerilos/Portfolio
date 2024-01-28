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
      <SingleProjectContainer>
        <ProjectImage src={image} />
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription theme={theme}>{description}</ProjectDescription>
        <ProjectLinkGrid>
          {source && <ProjectLinks href={source}>GitHub</ProjectLinks>}
          {liveSource && (
            <ProjectLinks href={liveSource}>Live Demo</ProjectLinks>
          )}
        </ProjectLinkGrid>
      </SingleProjectContainer>
    </AnimatedComponent>
  );
}
