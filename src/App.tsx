import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ErrorAccordionCodeComponent,
  Components,
  PrimaryButtonCodeComponent,
  SecondaryButtonCodeComponent,
  SecurityHeadersCodeComponent,
  LoaderCodeComponent,
  InputCodeComponent,
  PasswordInputCodeComponent,
  NotFound,
} from "./pages";

function App() {
  return (
    <div className="dark:bg-darkbg">
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
          <Route
            path="/security-headers"
            element={<SecurityHeadersCodeComponent />}
          />
          <Route path="/loader" element={<LoaderCodeComponent />} />
          <Route path="/input" element={<InputCodeComponent />} />
          <Route
            path="/password-input"
            element={<PasswordInputCodeComponent />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
