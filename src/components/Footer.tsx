import { FaMediumM } from "react-icons/fa";
import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode() as ContextValue;
  return (
    <footer
      className={` ${
        isDarkMode
          ? "bg-secondarydarkbg border-darkmodetext border-t-2"
          : "from-cta/95 to-hovercta/95 bg-gradient-to-b"
      } font-inter min-h-50vh px-010 relative mt-20 pt-36 pb-20 text-white`}
    >
      <div className="dark:border-darkmodetext absolute -top-16 left-1/2 flex h-32 w-[90vw] -translate-x-1/2 flex-col items-center justify-around rounded-lg bg-[#1f1e1e] py-3 text-white md:flex-row lg:w-[80vw] dark:border-2">
        <p className="font-medium md:text-xl">Reusable. Customizable. Yours.</p>
        <button
          onClick={() => {
            navigate("/components");

            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
          }}
          className="font-pacifico flex cursor-pointer items-center gap-x-2 rounded-full border-2 border-white px-5 py-2 text-xl font-medium text-white transition-all hover:bg-white hover:text-black"
        >
          Re-Use-it!
        </button>
      </div>

      <div className="flex flex-col pt-3 lg:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center gap-y-10">
          <p className="font-pacifico text-center text-6xl font-medium">
            Re-Use-it!
          </p>

          <p className="font-title px-4 text-center">
            Build once, customize infinitely —{" "}
            <span className="text-nowrap">
              reusable components made for you.
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://github.com/roshith-prakash"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cta cursor-pointer rounded-full border-2 border-white p-3 text-white transition-all hover:bg-white"
              aria-label="Visit GitHub Profile"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/roshith-prakash/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cta cursor-pointer rounded-full border-2 border-white p-3 text-white transition-all hover:bg-white"
              aria-label="Visit LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="mailto:roshithprakash07@gmail.com"
              className="hover:text-cta cursor-pointer rounded-full border-2 border-white p-3 text-white transition-all hover:bg-white"
              aria-label="Email Roshith Prakash"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@roshithprakash7"
              className="hover:text-cta cursor-pointer rounded-full border-2 border-white p-3 text-white transition-all hover:bg-white"
              aria-label="Medium Profile"
            >
              <FaMediumM className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Image - hidden on smaller screens */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <img
            src={
              "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logodark_gs3pnp.png"
            }
            alt="Re-use-it! Components"
            className="pointer-events-none h-72"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
