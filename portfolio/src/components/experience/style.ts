import styled from "styled-components";

const ExperienceContainer = styled.section`
  background-color: white;
  padding: 5%;
`;
const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  text-align: center;
`;
const SubTitle = styled.h2`
  margin-bottom: 5px;
`;

const ExperienceInnerContainer = styled.div`
  background-color: #d5f8e5;
  padding: 10px;
  border-radius: 10px;
`;
const InnerGridContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 5px;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 250px;
  padding: 5px;
  justify-content: center;
  background-color: #59e4a8;
  border: 10px solid white;
  border-radius: 15px;
  text-wrap: nowrap;
`;

const ExpandButton = styled.button`
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid white;
  background-color: transparent;
  color: white;
`;
const CompanyLogo = styled.img`
  width: 90px;
  max-width: 100%;
`;

const SkillContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 5px;
  padding: 16px;
  justify-content: left;
`;

const SkillItem = styled.p`
  background-color: #1b2e35;
  color: white;
  padding: 6px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export {
  ExperienceContainer,
  ExperienceInnerContainer,
  GridContainer,
  ExpandButton,
  Title,
  SubTitle,
  SkillContainer,
  SkillItem,
  CompanyLogo,
  InnerGridContainer,
};
