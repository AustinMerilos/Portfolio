import styled from "styled-components";
import media from "../../utils/styleSizes";

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
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SingleProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 3%;
  background-color: white;
  border-radius: 20px;
  border: solid 1.5px ${(props) => props.theme.colors.secondary};
`;
const ProjectImage = styled.img`
  max-width: 60%;
  width: 100%;
  height: auto;
  border-radius: 5px;
  display: block;
  margin: 0 auto 10px auto;
`;

const ProjectTitle = styled.h1`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.extraColor};
  //text-shadow: 1px 0.5px 2px ${(props) => props.theme.colors.titleOutline};
`;
const ProjectDescription = styled.p`
  margin-bottom: 10px;
  flex-grow: 1;
  height: auto;
`;

const ProjectLinkGrid = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px; /* optional */
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
