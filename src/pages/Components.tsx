import { useEffect, useState } from "react";
import {
  ErrorAccordion,
  PrimaryButton,
  SecondaryButton,
  Input,
  PasswordInput,
  Loader,
  Timeline,
  Card,
} from "../components";
import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/Table";
import ComponentCard from "../components/ComponentCard";
import { Typewriter } from "react-simple-typewriter";

const Components = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode() as ContextValue;

  // For interactivity
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    document.title = "Components | Re-Use-it!";
  }, []);

  return (
    <>
      <Toaster />
      <div
        className={`min-h-screen ${isDarkMode ? "bg-[url('/src/assets/animatedWaveDark.svg')]" : "bg-[url('/src/assets/animatedWave.svg')]"} bg-cover dark:text-white`}
      >
        {/* Title */}
        <h1 className="font-pacifico px-4 pt-10 text-center text-3xl italic md:text-5xl">
          Re-Use-it! Components
        </h1>
        <h2 className="font-title px-4 pt-10 text-center text-lg font-medium italic">
          Components -{" "}
          <Typewriter
            typeSpeed={75}
            deleteSpeed={75}
            loop
            words={["Reusable.", "Customizable.", "Yours."]}
          />
        </h2>

        {/* Getting started */}
        <div className="my-10 flex justify-center">
          <SecondaryButton
            onClick={() => {
              navigate("/getting-started");
            }}
            className="origin-bottom rounded-lg bg-white dark:bg-transparent"
            text="Need a hand? Get started here."
          ></SecondaryButton>
        </div>

        {/* Components */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 p-10">
          {/* Primary Button */}
          <ComponentCard
            path="/components/primary-button"
            title=" Primary Button"
          >
            <div className="flex justify-center">
              <PrimaryButton
                onClick={() => {
                  toast("You clicked a Primary Button!");
                }}
                text="Primary Button"
              />
            </div>
            <div className="flex justify-center">
              <PrimaryButton disabled text="Disabled Primary Button" />
            </div>
          </ComponentCard>

          {/* Secondary Button */}
          <ComponentCard
            path="/components/secondary-button"
            title="Secondary Button"
          >
            <div className="flex justify-center">
              <SecondaryButton
                onClick={() => {
                  toast("You clicked a Secondary Button!");
                }}
                text="Secondary Button"
              />
            </div>
            <div className="flex justify-center">
              <SecondaryButton disabled text="Disabled Secondary Button" />
            </div>
          </ComponentCard>

          {/* Error Accordion */}
          <ComponentCard path="/components/error-accordion" title="Error">
            <button
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className="w-full cursor-pointer rounded border-2 p-2 dark:text-white"
            >
              {isOpen ? "Hide" : "Show"} Error
            </button>
            <ErrorAccordion text="This is an error message." isOpen={isOpen} />
          </ComponentCard>

          {/* Input */}
          <ComponentCard path="/components/input" title="Text Input">
            <Input
              value={inputValue}
              placeholder="Enter your text"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </ComponentCard>

          {/* Password Input */}
          <ComponentCard
            path="/components/password-input"
            title="Password Input"
          >
            <PasswordInput
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </ComponentCard>

          {/* Loading Placeholder */}
          <ComponentCard path="/components/loader" title="Loading Placeholder">
            <Loader />
            <Loader />
            <Loader />
          </ComponentCard>

          {/* Timeline */}
          <ComponentCard path="/components/timeline" title="Timeline">
            <div>
              {["Event A", "Event B", "Event C"].map((item, index) => {
                return (
                  <Timeline
                    isFilled={index != 2}
                    isLast={index == 2}
                    key={item}
                  >
                    <p>{item}</p>
                  </Timeline>
                );
              })}
            </div>
          </ComponentCard>

          {/* Security Headers */}
          <ComponentCard
            path="/components/security-headers"
            title="Security Headers"
          >
            <p className="text-center">
              Common Security Headers added using React Helmet.
            </p>
          </ComponentCard>

          {/* Article Card */}
          <Card
            primaryButtonText="View Code"
            secondaryButtonText="View Code"
            imageSrc="https://res.cloudinary.com/do8rpl9l4/image/upload/v1737443227/vuvep3cx4pgk0k5kgvql.jpg"
            imageAlt="Lewis Hamilton"
            title="Card Component"
            subtitle="(Yes this card is a component.)"
            primaryButtonClickHandler={() => navigate("/components/card")}
            secondaryButtonClickHandler={() => navigate("/components/card")}
          />

          {/* Navbar */}
          <ComponentCard path="/components/navbar" title="Navbar">
            <p className="text-center">Navigation Bar with Drawer Menu.</p>
          </ComponentCard>

          {/* Footer */}
          <ComponentCard path="/components/footer" title="Footer">
            <p className="text-center">Footer Component with Floating Div.</p>
          </ComponentCard>

          {/* Table */}
          <ComponentCard path="/components/table" title="Table">
            <Table className="max-w-lg">
              <TableHead>
                <TableRow>
                  <TableHeader>Sr No</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Country</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Alonso</TableCell>
                  <TableCell>Spain</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Vettel</TableCell>
                  <TableCell>Germany</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Hamilton</TableCell>
                  <TableCell>England</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ComponentCard>
        </div>
      </div>
    </>
  );
};

export default Components;
