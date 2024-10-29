import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  min-height: 10vh;

  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  padding: 0 10vw;
  
  background-color: ${props => props.theme['gray-300']};

  h1 {
    font-size: 1rem;
  }

  nav {
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
      color: ${props => props.theme['gray-900']};
      
      &.active {
        text-decoration: underline;
      }

      &:hover {
        transform: translateY(-2px);
        transition: 0.2s
      }
    }
  }
`