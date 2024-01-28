import styled from "styled-components";
import InlineSVG from "react-inlinesvg";
import backgroundImages from "../../assets/backgrounds";

const CurrentlyContainer = styled.section`
  background-image: url(${backgroundImages.currentBackGround});
  background-size: cover; /* Adjust as needed */
  background-position: center;

  padding: 5%;
`;
const CurrentlyContainerInnerContainer = styled.div`
  padding: 5%;
  display: flex;
`;
const TextContainer = styled.div`
  padding: 0 5%;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;
const SubTitle = styled.p`
  font-size: 1.1em;
  color: ${(props) => props.theme.colors.darkText};
  text-shadow: 1px 1px 1px black;
`;

const Image = styled(InlineSVG)`
  max-width: 55%;
  height: auto;
  path {
    fill: ${(props) => props.theme.colors.secondary};
    stroke: ${(props) => props.theme.colors.primary};
  }
`;

export {
  CurrentlyContainer,
  Title,
  SubTitle,
  CurrentlyContainerInnerContainer,
  Image,
  TextContainer,
};
