import { Link } from "@material-ui/core";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";
const ExperienceContainer = styled.section`
  padding: 8%;
`;
const ExperineceOutterContainer = styled.section`
  padding: 0 24%;
`;

const Title = styled.h1`
  position: relative;
  font-size: 2.5em;
  margin-bottom: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};

  &::after {
    content: "";
    position: absolute;
    left: 10%;
    right: 10%;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    z-index: -1;
    transition: top 0.3s ease;

    top: 100%;
  }

  &:hover::after {
    top: 50%;
  }
`;
const SubTitle = styled.h3`
  margin: 10px;
  color: ${(props) => props.theme.colors.secondTitle};
`;

const ExpandButton = styled.button`
  margin: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid;
  background-color: transparent;
  color: ${(props) => props.theme.colors.button};
  font-size: 25px;

  &:hover {
    background-color: ${(props) => props.theme.colors.title};
    color: ${(props) => props.theme.colors.secondTitle};
  }
`;

const ExperienceInnerContainer = styled.div`
  background-color: white;
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
  align-items: center;
  padding: 5px;

  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.darkText};

  border-radius: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyLogo = styled.img`
  background-color: white;

  width: 90px;
  border-radius: 30px;
  padding: 0px 7px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const SkillContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 5px;
  padding: 16px;
  justify-content: left;
`;

const SkillItem = styled.p`
  background-color: ${(props) => props.theme.colors.title};
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
