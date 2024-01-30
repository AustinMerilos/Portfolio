import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.darkText};
  display: flex;
  background-image: url(${(props) => props.theme.colors.background});
  background-size: cover;
  background-position: left;
`;

export const Title = styled.h1`
  position: relative;
  font-size: 2.5em;
  margin-bottom: 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};
`;

export const CompanyImage = styled.img`
  margin-bottom: 5px;
  border-radius: 5px;
  height: 150px;
  width: 300px;
  object-fit: cover;
  background-color: white;
`;

export const Content = styled.div`
  line-height: 1.6;
  max-width: 800px;
  margin: 130px auto;
`;
export const InnerContainer = styled.div`
  display: flex;
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.title};
  text-shadow: 1px 0.5px 1px ${(props) => props.theme.colors.titleOutline};
`;
export const Paragraph = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
  color: ${(props) =>
    props.theme.colors.text}; // Adjust color based on your theme
`;
