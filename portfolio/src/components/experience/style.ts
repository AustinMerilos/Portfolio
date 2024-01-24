import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;
const SubTitle = styled.h2`
  margin-bottom: 5px;
`;

const ExperienceContainer = styled.section`
  background-color: white;
  padding: 15%;
`;
const ExperienceInnerContainer = styled.div`
  background-color: #d5f8e5;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 250px;
  padding: 5px;
  justify-content: center; /* Center items horizontally */
`;
const ExpandButton = styled.button`
  margin-bottom: 10px;
`;

export {
  ExperienceContainer,
  ExperienceInnerContainer,
  GridContainer,
  ExpandButton,
  Title,
  SubTitle,
};
