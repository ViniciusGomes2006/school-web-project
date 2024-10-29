import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <h1>Lux&Speed</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aston-martin">Aston Martin</NavLink>
        <NavLink to="/rolls-royce">Rolls-Royce</NavLink>
        <NavLink to="/koenigsegg">Koenigsegg</NavLink>
        <NavLink to="/mercedes-benz">Mercedes-Benz</NavLink>
      </nav>
    </HeaderContainer>
  )
}