import { Link } from "@material-ui/core";
import styled from "styled-components";

const ProjectContainer = styled.section`
  background-color: #d5f8e5;
  padding: 3% 5%;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 10px;
`;
const ProjectInnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 100px;

  justify-content: center;
`;
const SingleProjectContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 5%;
  contain: content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectImage = styled.img`
  margin-bottom: 5px;
  border-radius: 5px;
  height: 150px;
  object-fit: cover;
`;

const ProjectTitle = styled.h1`
  margin-bottom: 10px;
`;
const ProjectDescription = styled.p`
  margin-bottom: 5px;
`;

const ProjectLinkGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  justify-content: center;
`;
const ProjectLinks = styled.a`
  && {
    background-color: #1b2e35;
    color: white;
    padding: 6px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      background-color: #59e4a8;
      color: black;
    }
  }
`;

const BlurOverlayContainer = styled.div`
  position: relative;
`;
const BlurOverlay = styled.div`
  filter: blur(5px);
`;
const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1b2e35;
  font-size: 34px;
  font-weight: bold;
  text-align: center;
`;

export {
  ProjectContainer,
  Title,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectLinks,
  SingleProjectContainer,
  ProjectInnerGrid,
  ProjectLinkGrid,
  BlurOverlay,
  TextOverlay,
  BlurOverlayContainer,
};
