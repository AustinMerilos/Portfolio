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
};

export default function SingleProject({
  title,
  image,
  description,
  source,
  liveSource,
}: SingleProjectItems) {
  return (
    <SingleProjectContainer>
      <ProjectImage src={image} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLinkGrid>
        {source && <ProjectLinks href={source}>GitHub</ProjectLinks>}
        {liveSource && <ProjectLinks href={liveSource}>Live Demo</ProjectLinks>}
      </ProjectLinkGrid>
    </SingleProjectContainer>
  );
}
