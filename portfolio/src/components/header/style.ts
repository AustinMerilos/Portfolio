import { styled } from "styled-components";
import media from "../../utils/styleSizes";

const HeaderSection = styled.section`
  padding: 10rem;
  display: flex;
  gap: 300px;

  background-image: url(${(props) => props.theme.colors.background});
  background-size: cover;
  background-position: center;

  ${media.mobile`
    padding: 4rem;
    display: contents;
    background-image: none;

  `}
  ${media.tablet`
   display:flow;
   
  `}
  ${media.desktop`
   display:flow;
   
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
const Name = styled.div`
  font-size: 4.5em;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 0 5px 10px ${(props) => props.theme.colors.titleOutline};
  ${media.mobile`
    font-size: 2.5em;

  `}
`;

const Title = styled.h1`
  position: relative;
  font-size: 4.5em;
  margin: 10px;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 0 5px 10px ${(props) => props.theme.colors.titleOutline};

  &::after {
    content: "";
    position: absolute;
    left: 0%;
    right: 40%;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    z-index: -1;
    transition: top 0.3s ease;
    top: 100%;
  }

  &:hover::after {
    top: 60%;
  }
  ${media.mobile`
    font-size: 2.5em;

  `}
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.text};
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.colors.text};
`;

const HeadShot = styled.img`
  border-radius: 180px;
  width: 350px;

  ${media.mobile`
    width: 200px;

  `}
`;

export {
  Title,
  HeaderContainer,
  HeaderSection,
  HeaderContent,
  Subtitle,
  Paragraph,
  HeadShot,
  Name,
};
