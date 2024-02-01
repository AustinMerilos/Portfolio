import styled from "styled-components";
import InlineSVG from "react-inlinesvg";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.darkText};
  display: flex;
  background-image: url(${(props) => props.theme.colors.background});
  background-size: cover;
  background-position: right;
`;

const Title = styled.h1`
  position: relative;
  font-size: 3em;
  margin-bottom: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};
`;

const Paragraph = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.text};
  max-width: 850px;
  //text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};
`;
const Content = styled.div`
  line-height: 1.6;
  margin: 130px auto;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Image = styled(InlineSVG)`
  max-width: 40%;
  height: auto;
  path {
    fill: ${(props) => props.theme.colors.title};
    stroke: ${(props) => props.theme.colors.text};
  }
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
