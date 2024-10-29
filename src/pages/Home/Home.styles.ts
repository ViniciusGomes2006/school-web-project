import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  
  background-color: ${props => props.theme['gray-100']};
`

export const Content = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;

  padding: 10vh 10vw 20vh 10vw;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${props => props.theme['gray-900']};
  h1 {
    font-size: 1.5rem;
  }
`