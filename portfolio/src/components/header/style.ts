import { styled } from "styled-components";
import media from "../../utils/styleSizes";

const HeaderSection = styled.section`
  padding: 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;

  background-image: url(${(props) => props.theme.colors.background});
  background-size: cover;
  background-position: center;

  ${media.desktop`
   display: flex;
   flex-wrap: wrap;
   padding: 6rem;
   gap: 3rem;

  `}
  ${media.tablet`
   display: flex;
   flex-wrap: wrap;
   padding: 3rem;
   gap: 2rem;
   justify-content: center;

  `}
  ${media.mobile`
    padding: 3rem 1.5rem;
    display: block;
    background-image: none;

  `}
`;

const HeaderContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: block;
`;

const HeaderContent = styled.div`
  text-align: center;
  display: flex;
  margin-top: 100px;
  gap: 25px;
`;
const Heading = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Name = styled.span`
  display: block;
  font-size: 4.5em;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 0 5px 10px ${(props) => props.theme.colors.titleOutline};
  ${media.tablet`
    font-size: 3.2em;

  `}
  ${media.mobile`
    font-size: 2.1em;
    max-width: 100%;
    overflow-wrap: break-word;

  `}
`;

const Title = styled.span`
  display: inline-block;
  position: relative;
  font-size: 4.5em;
  margin: 10px;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 0 5px 10px ${(props) => props.theme.colors.titleOutline};

  &::after {
    content: "";
    position: absolute;
    left: 0%;
    right: 30%;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    z-index: -1;
    transition: top 0.3s ease;
    top: 100%;
  }

  &:hover::after {
    top: 60%;
  }
  ${media.tablet`
    font-size: 3.2em;

  `}
  ${media.mobile`
    font-size: 2.1em;
    max-width: 100%;
    overflow-wrap: break-word;

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
  Heading,
  HeaderContainer,
  HeaderSection,
  HeaderContent,
  Subtitle,
  Paragraph,
  HeadShot,
  Name,
};
