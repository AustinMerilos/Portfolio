import styled from "styled-components";

const ProjectContainer = styled.section`
  padding: 3% 5%;
`;

const Title = styled.h1`
  position: relative;
  font-size: 2.5em;
  margin: 10px;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 0 5px 10px ${(props) => props.theme.colors.titleOutline};

  &::after {
    content: "";
    position: absolute;
    left: 0%;
    right: 88%;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    z-index: -1;
    transition: top 0.3s ease; /* Add a transition for the top property */

    top: 100%;
  }

  &:hover::after {
    /* On hover, change the top position to 0 to reveal the entire background */
    top: 50%;
  }
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
  //box-shadow: 12px 12px 2px 1px ${(props) => props.theme.colors.secondary};
  border: solid 1.5px ${(props) => props.theme.colors.secondary};

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
  color: ${(props) => props.theme.colors.extraColor};
  //text-shadow: 1px 0.5px 2px ${(props) => props.theme.colors.titleOutline};
`;
const ProjectDescription = styled.p`
  margin-bottom: 25px;
  height: 250px;
`;

const ProjectLinkGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  justify-content: center;
`;
const ProjectLinks = styled.a`
  && {
    background-color: #1b2e35;
    color: white;
    margin-bottom: 25px;
    padding: 6px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      background-color: ${(props) => props.theme.colors.secondary};
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
