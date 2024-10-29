import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 10vh;

  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10vw;

  background-color: ${props => props.theme['gray-800']};
  color: ${props => props.theme['gray-100']};
`