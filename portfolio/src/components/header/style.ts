import { styled } from "styled-components";
import media from "../../utils/styleSizes";
import backgroundImages from "../../assets/backgrounds";

const HeaderSection = styled.section`
  padding: 12rem;
  display: flex;
  gap: 300px;
  background-image: url(${backgroundImages.headerBackGround});
  background-size: cover; /* Adjust as needed */
  background-position: center;

  ${media.mobile`
    padding: 4rem;
    display: contents;
    background-image: none;

  `}
  ${media.tablet`
    padding: 4rem;
    gap: 0;

  `}
`;

const Container = styled.div``;
const HeaderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: inline-block;
`;

const HeaderContent = styled.div`
  text-align: center;
  display: flex;
  margin-top: 100px;
  gap: 25px;
  text-shadow: 1px 1px 2px black;
`;

const Title = styled.h1`
  font-size: 3.5em;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #2c3e50;

  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1em;
`;

const HeadShot = styled.img`
  border-radius: 180px;
  height: fit-content;
  width: 350px;
`;

export {
  Title,
  HeaderContainer,
  HeaderSection,
  HeaderContent,
  Subtitle,
  Paragraph,
  HeadShot,
  Container,
};
