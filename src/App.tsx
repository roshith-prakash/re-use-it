import { useEffect } from "react";
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
  TimelineCodeComponent,
  TailwindCSSComponent,
  TailwindConfigComponent,
  DarkModeFile,
  CardComponent,
  NavbarCodeComponent,
  FooterComponent,
  // SelectComponent,
} from "./pages";
import { Navbar } from "./components";
import SecurityHeaders from "./components/SecurityHeaders";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-darkbg font-sans">
      <SecurityHeaders />
      <BrowserRouter>
        <Navbar />
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

          <Route path="/timeline" element={<TimelineCodeComponent />} />

          <Route path="/navbar" element={<NavbarCodeComponent />} />

          <Route path="/footer" element={<FooterComponent />} />

          <Route path="/card" element={<CardComponent />} />

          {/* <Route path="/select" element={<SelectComponent />} /> */}

          <Route path="/tailwindcss" element={<TailwindCSSComponent />} />

          <Route path="/tailwindconfig" element={<TailwindConfigComponent />} />

          <Route path="/darkmode" element={<DarkModeFile />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
