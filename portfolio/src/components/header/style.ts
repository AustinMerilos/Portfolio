import { styled } from "styled-components";

const HeaderSection = styled.section`
  background-color: #f8f8f8;
  padding: 15%;
`;

const HeaderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  color: #555;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #777;
`;

export {
  Title,
  HeaderContainer,
  HeaderSection,
  HeaderContent,
  Subtitle,
  Paragraph,
};
