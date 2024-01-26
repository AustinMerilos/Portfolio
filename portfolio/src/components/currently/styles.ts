import styled from "styled-components";
import images from "../../assets";

const CurrentlyContainer = styled.section`
  background-color: white;
  padding: 5%;
  background-image: url(${images.currentBackGround});
  background-size: cover; /* Adjust as needed */
  background-position: center;
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
  font-size: 1.07em;
`;
const Image = styled.img`
  max-width: 55%;
  height: auto;
`;

export {
  CurrentlyContainer,
  Title,
  SubTitle,
  CurrentlyContainerInnerContainer,
  Image,
  TextContainer,
};
