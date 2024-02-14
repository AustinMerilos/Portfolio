import styled from "styled-components";
import InlineSVG from "react-inlinesvg";
import media from "../../utils/styleSizes";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.darkText};
  display: flex;
  background-image: url(${(props) => props.theme.colors.background});
  background-size: cover;
  background-position: right;
  font-family: sans-serif;
`;

const Title = styled.h1`
  position: relative;
  font-size: 3em;
  margin-bottom: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 0 3px 10px ${(props) => props.theme.colors.titleOutline};
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 0 5px 10px ${(props) => props.theme.colors.titleOutline};
`;

const Paragraph = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.text};
  max-width: 850px;
  overflow: hidden;
  //text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};
`;
const Content = styled.div`
  line-height: 1.6;
  margin: 130px auto;
  max-width: 65%;
`;

const InnerContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled(InlineSVG)`
  width: 40%;

  path {
    fill: ${(props) => props.theme.colors.title};
    stroke: ${(props) => props.theme.colors.imageOutline};
  }

  ${media.tablet`
    width:0%;

  `}
`;

export {
  Container,
  Title,
  Subtitle,
  Paragraph,
  Content,
  Image,
  InnerContainer,
};
