import { useEffect } from "react";
import { CodeBlock } from "@/components";

const MulterCode = `import multer from "multer"

// Configuring storage for multer
const storage = multer.diskStorage({
    filename: function (_, file, cb) {
        cb(null, file.originalname)
    }
})

// Initializing multer
const upload = multer({ storage: storage })

export default upload`;

const usingCode = `import upload from "./multer"

// Create a new post.
router.post("/create-post", upload.single("file"), createPost);`;

const Multer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Multer | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Multer Configuration</h1>
      <h2 className="py-5">
        Configures Multer for Uploading assets to a CDN like S3 or cloudinary.
      </h2>

      <h3 className="mt-10 py-5 pl-1">Install Multer</h3>
      <CodeBlock code={`npm i multer`} language="bash" />

      <div className="mt-10">
        <h3 className="py-2 pl-1 italic">
          Add the snippet using the Re-use-it! CLI.
        </h3>
        <CodeBlock code={`npx reuseit add-snippet multer`} language="bash" />
      </div>

      <p className="py-10 text-lg font-semibold">OR</p>

      <h3 className="mt-10 py-5 pl-1 italic">multer.ts</h3>
      <CodeBlock code={MulterCode} language="typescript" />

      <h3 className="mt-10 py-5 pl-1 italic">route.ts</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default Multer;
