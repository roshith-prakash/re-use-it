import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  GettingStarted,
  NotFound,
  TailwindConfigComponent,
  DarkModeFile,
  PackageFile,
  CodeSnippets,
  Components,
  // -----------------------------------
  PrimaryButtonCodeComponent,
  SecondaryButtonCodeComponent,
  ErrorAccordionCodeComponent,
  SecurityHeadersCodeComponent,
  LoaderCodeComponent,
  InputCodeComponent,
  PasswordInputCodeComponent,
  AvatarComponent,
  CheckboxComponent,
  TimelineCodeComponent,
  CardComponent,
  NavbarCodeComponent,
  FooterComponent,
  TableComponent,
  ModalComponent,
  RadioButtonComponent,
  SwitchComponent,
  // SelectComponent,
  // -------------------------------------
  MinutesToRead,
  UseDebounceHook,
  FormatNumber,
  Regex,
  AxiosInstance,
  Multer,
  Cloudinary,
  ShuffleArray,
} from "./pages";
import { Footer, Navbar } from "./components";
import SecurityHeaders from "./components/SecurityHeaders";
import { ContextValue, useDarkMode } from "./context/DarkModeContext";

function App() {
  const { isDarkMode } = useDarkMode() as ContextValue;
  return (
    <div className="dark:bg-darkbg dark:text-darkmodetext font-sans">
      <SecurityHeaders />
      <BrowserRouter>
        <Navbar />
        <main
          className={`${isDarkMode ? "bg-[url('/src/assets/animatedWaveDark.svg')]" : "bg-[url('/src/assets/animatedWave.svg')]"} bg-cover`}
        >
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/getting-started" element={<GettingStarted />} />

            <Route path="/package-json" element={<PackageFile />} />

            <Route
              path="/tailwindconfig"
              element={<TailwindConfigComponent />}
            />

            <Route path="/darkmode" element={<DarkModeFile />} />

            {/* ----------------------------------------------------------------------------------------------------------------------------- */}

            {/* COMPONENTS */}

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

            <Route
              path="/components/loader"
              element={<LoaderCodeComponent />}
            />

            <Route path="/components/input" element={<InputCodeComponent />} />

            <Route
              path="/components/password-input"
              element={<PasswordInputCodeComponent />}
            />

            <Route
              path="/components/timeline"
              element={<TimelineCodeComponent />}
            />

            <Route
              path="/components/navbar"
              element={<NavbarCodeComponent />}
            />

            <Route path="/components/footer" element={<FooterComponent />} />

            <Route path="/components/card" element={<CardComponent />} />

            <Route path="/components/table" element={<TableComponent />} />

            <Route path="/components/modal" element={<ModalComponent />} />

            <Route path="/components/avatar" element={<AvatarComponent />} />

            <Route
              path="/components/checkbox"
              element={<CheckboxComponent />}
            />

            <Route
              path="/components/radio"
              element={<RadioButtonComponent />}
            />

            <Route path="/components/switch" element={<SwitchComponent />} />

            {/* Need to improve component */}
            {/* <Route path="/components/select" element={<SelectComponent />} /> */}

            {/* ----------------------------------------------------------------------------------------------------------------------------- */}

            {/* CODE SNIPPETS */}

            <Route path="/code-snippets" element={<CodeSnippets />} />

            <Route
              path="/code-snippets/minutes-to-read"
              element={<MinutesToRead />}
            />

            <Route
              path="/code-snippets/use-debounce"
              element={<UseDebounceHook />}
            />

            <Route
              path="/code-snippets/format-number"
              element={<FormatNumber />}
            />

            <Route path="/code-snippets/regex" element={<Regex />} />

            <Route path="/code-snippets/axios" element={<AxiosInstance />} />

            <Route path="/code-snippets/multer" element={<Multer />} />

            <Route path="/code-snippets/cloudinary" element={<Cloudinary />} />

            <Route
              path="/code-snippets/shuffle-array"
              element={<ShuffleArray />}
            />

            {/* ----------------------------------------------------------------------------------------------------------------------------- */}

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
