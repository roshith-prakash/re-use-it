import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiSolidComponent } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { TbSettings } from "react-icons/tb";

const Home = () => {
  useEffect(() => {
    document.title = "Re-Use-it!";
  }, []);
  return (
    <div className={`dark:text-darkmodetext min-h-screen pb-20`}>
      {/* ------------------------------------------------------------------- */}

      {/* Hero */}
      <section className="flex min-h-[90vh] flex-col lg:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center gap-16 py-20 lg:gap-10 lg:py-0">
          <h1 className="font-pacifico px-4 text-center text-5xl md:text-7xl">
            Re-Use-it!
          </h1>
          <h2 className="font-title px-5 text-center text-[1.7rem] leading-14 md:text-3xl">
            React Components that are
            <span className="text-cta dark:text-darkmodeCTA">
              {" "}
              <Typewriter
                typeSpeed={75}
                deleteSpeed={75}
                loop
                words={["Reusable.", "Customizable.", "Yours."]}
              />
            </span>
          </h2>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}

      {/* Welcome to Re-use-it */}
      <section className="flex flex-col items-center gap-5 px-5 py-20 text-center">
        <h1 className="text-4xl leading-12 font-semibold">
          Welcome to{" "}
          <span className="font-pacifico text-hovercta dark:text-darkmodeCTA text-nowrap">
            Re-use-it!
          </span>
        </h1>
        <p className="mt-6 md:text-lg md:leading-8 lg:max-w-6xl">
          Build faster, smarter, and better with our collection of reusable and
          customizable React components, code snippets, and utilities. Designed
          with{" "}
          <strong className="inline-flex items-center gap-2">
            TypeScript <SiTypescript className="text-[#3178C6]" />
          </strong>{" "}
          for type safety and powered by{" "}
          <strong className="inline-flex items-center gap-1">
            TailwindCSS <SiTailwindcss className="text-teal-400" />
          </strong>{" "}
          for seamless styling,{" "}
          <span className="font-pacifico text-lg md:text-xl">Re-use-it</span>{" "}
          &nbsp; makes development efficient and enjoyable.
        </p>
        <p className="mt-4 md:text-lg md:leading-8 lg:max-w-6xl">
          Whether you're starting from scratch or refining an existing project,
          we've got you covered with components that are easy to integrate and
          endlessly customizable.
        </p>
      </section>

      {/* ------------------------------------------------------------------- */}

      {/* Why Choose Re-use-it? */}
      <section className="py-20 text-center">
        <h2 className="px-4 text-4xl leading-12 font-semibold">
          Why Choose{" "}
          <span className="font-pacifico text-nowrap">Re-use-it?</span>
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-10 px-6 md:grid-cols-3">
          <div className="dark:bg-darkbg flex flex-col rounded-2xl border-white bg-white p-6 shadow-xl transition-all hover:scale-105 dark:border-t-[1px] dark:shadow-md dark:shadow-white">
            <h3 className="mb-4 flex items-center justify-center gap-2 text-xl font-bold">
              Reusable Components <BiSolidComponent className="text-2xl" />
            </h3>
            <p className="flex flex-1 items-center">
              Save time with pre-built React components that fit seamlessly into
              your projects. Designed to be efficient, clean, and ready for
              reuse.
            </p>
          </div>
          <div className="dark:bg-darkbg flex flex-col rounded-2xl border-white bg-white p-6 shadow-xl transition-all hover:scale-105 dark:border-t-[1px] dark:shadow-md dark:shadow-white">
            <h3 className="mb-4 flex items-center justify-center gap-2 text-xl font-bold">
              Code Snippets <FaCode className="translate-y-0.5 text-2xl" />
            </h3>
            <p className="flex flex-1 items-center">
              Leverage handy utilities and reusable code snippets to handle
              common tasks and logic effortlessly in your projects.
            </p>
          </div>
          <div className="dark:bg-darkbg rounded-2xl border-white bg-white p-6 shadow-xl transition-all hover:scale-105 dark:border-t-[1px] dark:shadow-md dark:shadow-white">
            <h3 className="mb-4 flex items-center justify-center gap-2 text-xl font-bold">
              Minimal Overhead
              <TbSettings className="text-2xl" />
            </h3>
            <p>
              Re-Use-It components are designed with low dependency overhead,
              using only essential, replaceable packages like{" "}
              <strong>react-icons</strong> —keeping your project lightweight and
              flexible.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}

      {/* How does it work?*/}
      <section className="flex flex-col items-center gap-8 py-20 text-center">
        <h2 className="mb-6 px-5 text-4xl font-semibold">How Does It Work?</h2>
        <p className="px-6 md:text-lg md:leading-8 lg:max-w-6xl">
          <span className="font-pacifico text-lg md:text-xl"> Re-use-it </span>{" "}
          &nbsp; makes it easy for developers to find, customize, and implement
          pre-built components and utilities. Simply follow our documentation,
          copy the code, and integrate it into your projects with minimal
          effort.
        </p>
        <div className="mt-10">
          <Link
            to="/components/getting-started"
            className="bg-cta hover:bg-hovercta origin-bottom rounded-2xl px-6 py-3 text-white shadow-md transition-all hover:scale-105 md:text-lg"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}

      {/* Featured Components & Snippets */}
      <section className="py-20 text-center">
        <h2 className="px-4 text-4xl font-semibold">
          Featured Components & Snippets
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-10 px-6 md:grid-cols-3">
          <div className="dark:bg-darkbg flex flex-col items-center gap-10 rounded-2xl border-white bg-white p-6 shadow-xl transition-all hover:scale-105 dark:border-t-[1px] dark:shadow-md dark:shadow-white">
            <h3 className="mb-4 text-xl font-bold">Modal</h3>
            <p>A Modal component which pops up when a condition is met.</p>

            <Link to="/components/modal">
              <PrimaryButton text="View Component"></PrimaryButton>
            </Link>
          </div>
          <div className="dark:bg-darkbg flex flex-col items-center gap-10 rounded-2xl border-white bg-white p-6 shadow-xl transition-all hover:scale-105 dark:border-t-[1px] dark:shadow-md dark:shadow-white">
            <h3 className="mb-4 text-xl font-bold">Timeline</h3>
            <p>Timeline Component to show the chronlogical order of events.</p>

            <Link to="/components/timeline">
              <PrimaryButton text="View Component"></PrimaryButton>
            </Link>
          </div>
          <div className="dark:bg-darkbg flex flex-col items-center gap-10 rounded-2xl border-white bg-white p-6 shadow-xl transition-all hover:scale-105 dark:border-t-[1px] dark:shadow-md dark:shadow-white">
            <h3 className="mb-4 text-xl font-bold">useDebounce</h3>
            <p className="flex-1">
              A Hook to debounce user input with a delay.
            </p>

            <Link to="/code-snippets/use-debounce">
              <PrimaryButton text="View Code Snippet"></PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}

      {/* Contribute */}
      <section className="flex flex-col items-center gap-8 py-20 text-center">
        <h2 className="mb-6 px-5 text-4xl font-semibold">Join the Community</h2>
        <p className="px-6 md:text-lg md:leading-8 lg:max-w-6xl">
          <span className="font-pacifico text-lg md:text-xl"> Re-use-it </span>
          &nbsp; is not just a library; it's a growing community of developers
          like you. Share your feedback, contribute your own components, and be
          part of a platform that thrives on collaboration.
        </p>
        <div className="mt-10">
          <a
            href="https://github.com/roshith-prakash/re-use-it"
            target="_blank"
            className="bg-cta hover:bg-hovercta origin-bottom rounded-2xl px-6 py-3 text-white shadow-md transition-all hover:scale-105 md:text-lg"
          >
            Contribute Now!
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
