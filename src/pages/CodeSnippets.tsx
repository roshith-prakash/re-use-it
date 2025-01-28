import ComponentCard from "../components/ComponentCard";
import { Typewriter } from "react-simple-typewriter";

const CodeSnippets = () => {
  return (
    <div className={`dark:text-darkmodetext min-h-screen`}>
      {/* Title */}
      <h1 className="font-pacifico px-4 pt-20 text-center text-3xl leading-16 italic md:text-5xl">
        Re-Use-it! Functions & Code Snippets
      </h1>

      <h2 className="font-title px-4 py-10 text-center text-lg font-medium italic">
        It's{" "}
        <span className="text-cta dark:text-darkmodeCTA">
          <Typewriter
            typeSpeed={75}
            deleteSpeed={75}
            loop
            words={["Reusable.", "Adaptable.", "Yours."]}
          />
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 p-10">
        {/* Use Debounce */}
        <ComponentCard
          path="/code-snippets/use-debounce"
          title="useDebounce Hook"
        >
          <p className="text-center">
            To debounce a user's input by a specified delay.
          </p>
        </ComponentCard>

        {/* Regex */}
        <ComponentCard path="/code-snippets/regex" title="Regex Functions">
          <p className="text-center">
            Useful Regex functions - username, password, email.
          </p>
        </ComponentCard>

        {/* Axios */}
        <ComponentCard
          path="/code-snippets/shuffle-array"
          title="Shuffle Array"
        >
          <p className="text-center">Shuffle elements inside an array.</p>
        </ComponentCard>

        {/* Minutes to Read */}
        <ComponentCard
          path="/code-snippets/minutes-to-read"
          title="Minutes to read"
        >
          <p className="text-center">
            To calculate the time required to read something based on content
            length.
          </p>
        </ComponentCard>

        {/* Format Number */}
        <ComponentCard
          path="/code-snippets/format-number"
          title="Format Number"
        >
          <p className="text-center">
            Format numbers into a human readable format.
          </p>
        </ComponentCard>

        {/* Axios */}
        <ComponentCard path="/code-snippets/axios" title="Axios Instance">
          <p className="text-center">Creates a custom Axios Instance.</p>
        </ComponentCard>

        {/* Multer */}
        <ComponentCard path="/code-snippets/multer" title="Multer">
          <p className="text-center">Configures Multer for file upload.</p>
        </ComponentCard>

        {/* Cloudinary */}
        <ComponentCard path="/code-snippets/cloudinary" title="Cloudinary">
          <p className="text-center">Configures Cloudinary SDK.</p>
        </ComponentCard>
      </div>
    </div>
  );
};

export default CodeSnippets;
