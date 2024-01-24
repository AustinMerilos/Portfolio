import { Link } from "@material-ui/core";
import styled from "styled-components";

const AboutContainer = styled.section`
  margin: 10px;
  background-color: #59e4a8;
  padding: 5%;
`;
const Image = styled.img`
  max-width: 35%;
  height: auto;
`;

const InnerContainer = styled.div`
  display: inline-block;
`;
const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 8px; /* Reduced the gap */
  padding: 16px;
  justify-content: center; /* Center items horizontally */
  max-width: 475px;
`;

const SkillItem = styled.p`
  background-color: #1b2e35;
  color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 100px;
`;
const BioContainer = styled.div`
  margin: 10px;
  padding: 15px;
  max-width: 700px;
`;
const SubBioTitle = styled.h2`
  margin-bottom: 5px;
`;
const SubBio = styled.p`
  margin-bottom: 5px;
`;
const ReadMore = styled(Link)`
  && {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

export {
  AboutContainer,
  Title,
  SkillItem,
  ReadMore,
  SubBio,
  SubBioTitle,
  BioContainer,
  GridContainer,
  Image,
  InnerContainer,
};
