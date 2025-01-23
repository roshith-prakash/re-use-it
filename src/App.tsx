import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ErrorAccordionCodeComponent,
  Components,
  PrimaryButtonCodeComponent,
  SecondaryButtonCodeComponent,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route
          path="/error-accordion"
          element={<ErrorAccordionCodeComponent />}
        />
        <Route
          path="/primary-button"
          element={<PrimaryButtonCodeComponent />}
        />
        <Route
          path="/secondary-button"
          element={<SecondaryButtonCodeComponent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
