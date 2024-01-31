import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.darkText};
  display: flex;
  background-image: url(${(props) => props.theme.colors.background});
  background-size: cover;
  background-position: center;
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
`;
const Content = styled.div`
  line-height: 1.6;
  margin: 130px auto;
`;

export { Container, Title, Subtitle, Paragraph, Content };
