import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Aston } from "./pages/Aston/Aston";
import { Rolls } from "./pages/Rolls/Rolls";
import { Koenigsegg } from "./pages/Koenigsegg/Koenigsegg";
import { Mercedes } from "./pages/Mercedes/Mercedes";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/aston-martin" element={<Aston />} />
          <Route path="/rolls-royce" element={<Rolls />} />
          <Route path="/koenigsegg" element={<Koenigsegg />} />
          <Route path="/mercedes-benz" element={<Mercedes />} />
      </Routes>
    </BrowserRouter>
  );
}