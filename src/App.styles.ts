import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  
  background-color: ${props => props.theme['gray-100']};
`