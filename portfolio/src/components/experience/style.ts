import { Link } from "@material-ui/core";
import styled from "styled-components";
import images from "../../assets";
import LanguageIcon from "@mui/icons-material/Language";
const ExperienceContainer = styled.section`
  background-color: white;
  padding: 8%;
  background-image: url(${images.experienceBackGround});
  background-size: cover;
  background-position: center;
`;
const ExperineceOutterContainer = styled.section`
  padding: 0 24%;
`;
const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  text-align: center;
`;
const SubTitle = styled.h2`
  margin: 10px;
`;

const ExpandButton = styled.button`
  margin: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid white;
  background-color: transparent;
  color: white;
  font-size: 25px;
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

const Website = styled(Link)`
  && {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;
const Description = styled.p`
  color: black;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  padding: 5px;
  background-color: #59e4a8;

  border-radius: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
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

const WebsiteImage = styled(LanguageIcon)`
  color: black;
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
  Description,
  SubTitleContainer,
  Website,
  ExperineceOutterContainer,
  WebsiteImage,
};
