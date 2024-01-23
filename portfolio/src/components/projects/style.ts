import styled from "styled-components";

const ProjectContainer = styled.section`
  background-color: #d5f8e5;
  padding: 3%;
  margin: 10px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 10px;
`;
const ProjectInnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 95px; /* Reduced the gap */

  justify-content: center; /* Center items horizontally */
`;
const SingleProjectContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 5%;
  contain: content;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
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
const ProjectLinks = styled.button`
  margin-bottom: 10px;
`;
const BlurOverlay = styled.div`
  filter: blur(5px); // Adjust the blur intensity as needed
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
};
