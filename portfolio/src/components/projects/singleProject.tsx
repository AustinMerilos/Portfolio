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
  link: string;
};

export default function SingleProject({
  title,
  image,
  link,
  description,
}: SingleProjectItems) {
  return (
    <SingleProjectContainer>
      <ProjectImage src={image} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLinkGrid>
        <ProjectLinks>{link}</ProjectLinks>
        <ProjectLinks>live</ProjectLinks>
      </ProjectLinkGrid>
    </SingleProjectContainer>
  );
}
