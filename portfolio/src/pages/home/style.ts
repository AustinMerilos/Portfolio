import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.darkText};
  font-family: "Roboto", sans-serif;
`;
