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
  Modal,
  Avatar,
  Checkbox,
  RadioButton,
  Switch,
} from "../components";
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

  // For interactivity
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const [switchState, setSwitchState] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Components | Re-Use-it!";
  }, []);

  return (
    <>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Modal>

      <Toaster />

      <div className={`dark:text-darkmodetext min-h-screen`}>
        {/* Title */}
        <h1 className="font-pacifico px-4 pt-10 text-center text-3xl italic md:text-5xl">
          Re-Use-it! Components
        </h1>
        <h2 className="font-title px-4 pt-10 text-center text-lg font-medium italic">
          It's{" "}
          <span className="text-cta dark:text-darkmodeCTA">
            <Typewriter
              typeSpeed={75}
              deleteSpeed={75}
              loop
              words={["Reusable.", "Customizable.", "Yours."]}
            />
          </span>
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
            <div className="flex flex-col items-center">
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

          {/* Modal */}
          <ComponentCard path="/components/modal" title="Modal">
            <SecondaryButton
              text="Open Modal"
              className="mx-auto"
              onClick={() => setIsModalOpen(true)}
            />
          </ComponentCard>

          {/* Avatar */}
          <ComponentCard path="/components/avatar" title="Avatar">
            <div className="flex justify-center">
              <Avatar
                imageSrc="https://avatars.githubusercontent.com/u/86643111?v=4"
                fallBackText="Roshith Prakash"
                border
              />
            </div>
          </ComponentCard>

          {/* Checkbox */}
          <ComponentCard path="/components/checkbox" title="Checkbox">
            <div className="flex items-center justify-center">
              <Checkbox
                onChange={(e) => {
                  console.log(e.target.checked);
                }}
              />
              <label>Check this</label>
            </div>
          </ComponentCard>

          {/* Radio Button */}
          <ComponentCard path="/components/radio" title="Radio Button">
            <div className="flex items-center justify-center">
              <RadioButton
                value="option1"
                checked={selectedOption == "option1"}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <label>Option 1</label>
            </div>
            <div className="flex items-center justify-center">
              <RadioButton
                value="option2"
                checked={selectedOption == "option2"}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <label>Option 2</label>
            </div>
            <div className="flex items-center justify-center">
              <RadioButton
                value="option3"
                checked={selectedOption == "option3"}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />
              <label>Option 3</label>
            </div>
          </ComponentCard>

          {/* Switch */}
          <ComponentCard path="/components/switch" title="Switch">
            <div className="flex items-center justify-center">
              <Switch
                checked={switchState}
                onChange={() => {
                  setSwitchState((prev) => !prev);
                }}
              />
              <label>Switch state</label>
            </div>
          </ComponentCard>
        </div>
      </div>
    </>
  );
};

export default Components;
