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
  Home,
  TableComponent,
  PackageFile,
  GettingStarted,
  // SelectComponent,
} from "./pages";
import { Footer, Navbar } from "./components";
import SecurityHeaders from "./components/SecurityHeaders";

function App() {
  return (
    <div className="dark:bg-darkbg dark:text-darkmodetext font-sans">
      <SecurityHeaders />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/components" element={<Components />} />

          <Route
            path="/components/error-accordion"
            element={<ErrorAccordionCodeComponent />}
          />

          <Route
            path="/components/primary-button"
            element={<PrimaryButtonCodeComponent />}
          />

          <Route
            path="/components/secondary-button"
            element={<SecondaryButtonCodeComponent />}
          />

          <Route
            path="/components/security-headers"
            element={<SecurityHeadersCodeComponent />}
          />

          <Route path="/components/loader" element={<LoaderCodeComponent />} />

          <Route path="/components/input" element={<InputCodeComponent />} />

          <Route
            path="/components/password-input"
            element={<PasswordInputCodeComponent />}
          />

          <Route
            path="/components/timeline"
            element={<TimelineCodeComponent />}
          />

          <Route path="/components/navbar" element={<NavbarCodeComponent />} />

          <Route path="/components/footer" element={<FooterComponent />} />

          <Route path="/components/card" element={<CardComponent />} />

          <Route path="/components/table" element={<TableComponent />} />

          {/* <Route path="/select" element={<SelectComponent />} /> */}

          <Route path="/getting-started" element={<GettingStarted />} />

          <Route path="/package-json" element={<PackageFile />} />

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
