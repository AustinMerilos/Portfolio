import styled from "styled-components";
import media from "../../utils/styleSizes";

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

  ${media.mobile`
    font-size: 1.5em;
  `}
`;

const CompanyImage = styled.img`
  background-color: white;
  width: 150px;
  height: 150px;
  border-radius: 30px;
  padding: 0px 7px;
  margin-top: 40px;
  margin-bottom: 40px;

  ${media.mobile`
    width: 100px;
    height: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
  `}
`;

const Content = styled.div`
  line-height: 1.6;
  margin: 130px auto;

  ${media.mobile`
    margin: 30px auto;
  `}
`;

const InnerContainer = styled.div`
  display: flex;
  max-width: 850px;
  gap: 30px;
  align-items: center;
  margin: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-top: 0px;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};
  ${media.mobile`
    font-size: 1em;
     margin: 10px;
    
  `}
`;

const Heading = styled.h3`
  font-size: 1.3em;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};
  ${media.mobile`
    font-size: .9em;
  `}
`;

const Paragraph = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.text};

  ${media.mobile`
    font-size: 0.7em;
    
  `}
`;

export {
  Paragraph,
  Heading,
  Subtitle,
  InnerContainer,
  Title,
  Container,
  Content,
  CompanyImage,
};
