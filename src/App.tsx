import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";

export default function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <Router/>
      </ThemeProvider>
  )
}