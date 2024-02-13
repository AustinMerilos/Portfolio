import styled from "styled-components";
import media from "../../utils/styleSizes";
import { ReactComponent as desktop } from "../../assets/images/desktop.svg";

const CurrentlyContainer = styled.section`
  padding: 5%;
`;
const CurrentlyContainerInnerContainer = styled.div`
  padding: 5%;
  display: flex;
`;
const TextContainer = styled.div`
  padding: 0 5%;
`;

const Title = styled.h1`
  position: relative;
  font-size: 2.5em;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 0 5px 10px ${(props) => props.theme.colors.titleOutline};

  &::after {
    content: "";
    position: absolute;
    left: 0%;
    right: 30%;
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
const SubTitle = styled.p`
  font-size: 1.1em;
  color: ${(props) => props.theme.colors.text};
`;

const Image = styled(desktop)`
  width: 90%;
  path {
    fill: ${(props) => props.theme.colors.secondary};
    stroke: ${(props) => props.theme.colors.primary};
  }
  ${media.mobile`
     max-width: 0;
   

  `}
`;

export {
  CurrentlyContainer,
  Title,
  SubTitle,
  CurrentlyContainerInnerContainer,
  Image,
  TextContainer,
};
