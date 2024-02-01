import styled from "styled-components";
import InlineSVG from "react-inlinesvg";
import media from "../../utils/styleSizes";

const AboutContainer = styled.section`
  display: flex;

  ${media.mobile`
   display:grid;
   

  `}
`;
const Image = styled(InlineSVG)`
  max-width: 35%;
  path {
    fill: ${(props) => props.theme.colors.primary};
    stroke: ${(props) => props.theme.colors.secondary};
  }
  ${media.mobile`
   max-width: 0;
   

  `}
`;

const InnerContainer = styled.div`
  display: inline-block;
`;
const Title = styled.h1`
  position: relative;
  font-size: 2.5em;
  margin: 25px;
  display: inline-block;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
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
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 8px;
  padding: 16px;
  justify-content: center;
  max-width: 475px;
`;

const SkillItem = styled.p`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondTitle};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 140px;
`;
const BioContainer = styled.div`
  color: ${(props) => props.theme.colors.text};
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
const ReadMore = styled.a`
  color: ${(props) => props.theme.colors.title};
  text-decoration: none;
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
