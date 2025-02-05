import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  AccordionCodeComponent,
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
  ProgressComponent,
  SliderComponent,
  SelectComponent,
  AccordionGroupComponent,
  BadgeComponent,
  CarouselComponent,
  TextAreaComponent,
  TooltipComponent,
  DrawerComponent,
  // -------------------------------------
  MinutesToRead,
  UseDebounceHook,
  FormatNumber,
  Regex,
  AxiosInstance,
  Multer,
  Cloudinary,
  ShuffleArray,
  ToggleComponent,
  ImageCompression,
} from "./pages";
import { Footer, Navbar } from "./components";
import SecurityHeaders from "./components/SecurityHeaders";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="dark:bg-darkbg dark:text-darkmodetext font-sans">
      <Analytics />
      <SecurityHeaders />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* ----------------------------------------------------------------------------------------------------------------------------- */}

            {/* COMPONENTS */}

            <Route path="/components" element={<Components />}>
              <Route
                index
                element={<Navigate to="getting-started" replace />}
              />
              <Route path="getting-started" element={<GettingStarted />} />
              <Route path="packages" element={<PackageFile />} />
              <Route
                path="tailwind-configuration"
                element={<TailwindConfigComponent />}
              />
              <Route path="darkmode" element={<DarkModeFile />} />
              <Route path="accordion" element={<AccordionCodeComponent />} />
              <Route
                path="primary-button"
                element={<PrimaryButtonCodeComponent />}
              />
              <Route
                path="secondary-button"
                element={<SecondaryButtonCodeComponent />}
              />
              <Route
                path="security-headers"
                element={<SecurityHeadersCodeComponent />}
              />
              <Route path="loader" element={<LoaderCodeComponent />} />
              <Route path="input" element={<InputCodeComponent />} />
              <Route
                path="password-input"
                element={<PasswordInputCodeComponent />}
              />
              <Route path="timeline" element={<TimelineCodeComponent />} />
              <Route path="navbar" element={<NavbarCodeComponent />} />
              <Route path="footer" element={<FooterComponent />} />
              <Route path="card" element={<CardComponent />} />
              <Route path="table" element={<TableComponent />} />
              <Route path="modal" element={<ModalComponent />} />
              <Route path="avatar" element={<AvatarComponent />} />
              <Route path="checkbox" element={<CheckboxComponent />} />
              <Route path="radio" element={<RadioButtonComponent />} />
              <Route path="switch" element={<SwitchComponent />} />
              <Route path="progress" element={<ProgressComponent />} />
              <Route path="slider" element={<SliderComponent />} />
              <Route path="select" element={<SelectComponent />} />
              <Route
                path="accordion-group"
                element={<AccordionGroupComponent />}
              />
              <Route path="badge" element={<BadgeComponent />} />
              <Route path="carousel" element={<CarouselComponent />} />
              <Route path="textarea" element={<TextAreaComponent />} />
              <Route path="tooltip" element={<TooltipComponent />} />
              <Route path="toggle" element={<ToggleComponent />} />
              <Route path="drawer" element={<DrawerComponent />} />
            </Route>
            {/* ----------------------------------------------------------------------------------------------------------------------------- */}

            {/* CODE SNIPPETS */}

            <Route path="/code-snippets" element={<CodeSnippets />}>
              <Route index element={<Navigate to="use-debounce" replace />} />
              <Route path="minutes-to-read" element={<MinutesToRead />} />
              <Route path="use-debounce" element={<UseDebounceHook />} />
              <Route path="format-number" element={<FormatNumber />} />
              <Route path="regex" element={<Regex />} />
              <Route path="axios" element={<AxiosInstance />} />
              <Route path="multer" element={<Multer />} />
              <Route path="cloudinary" element={<Cloudinary />} />
              <Route path="shuffle-array" element={<ShuffleArray />} />
              <Route path="image-compression" element={<ImageCompression />} />
            </Route>

            {/* ----------------------------------------------------------------------------------------------------------------------------- */}

            <Route path="*" element={<NotFound />} />
          </Routes>

          <div className="pt-16">
            <Footer />
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
