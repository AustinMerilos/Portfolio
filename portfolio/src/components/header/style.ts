import { styled } from "styled-components";
import images from "../../assets";
import media from "../../utils/styleSizes";

const HeaderSection = styled.section`
  background-color: white;
  padding: 12rem;
  display: flex;
  gap: 300px;
  background-image: url(${images.headerBackGround});
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
`;

const Title = styled.h1`
  font-size: 3.5em;

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
  width: 350px;
  height: fit-content;
  border-radius: 180px;
`;

export {
  Title,
  HeaderContainer,
  HeaderSection,
  HeaderContent,
  Subtitle,
  Paragraph,
  HeadShot,
};
