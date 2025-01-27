import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

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
      <h1 className="text-center text-2xl font-medium">Multer</h1>
      <h2 className="py-5 text-center">
        Configures Multer for Uploading assets to a CDN like S3 or cloudinary.
      </h2>

      <h3 className="py-10 pl-1 italic">multer.ts</h3>
      <CopyBlock
        text={MulterCode}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="mt-8 pl-1 italic">route.ts</h3>
      <CopyBlock
        text={usingCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default Multer;
