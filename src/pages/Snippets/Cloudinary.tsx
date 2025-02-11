import { useEffect } from "react";
import { CodeBlock } from "../../components";

const CloudinaryCode = `import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Configuring cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

export default cloudinary;
`;

const usingCode = ` import cloudinary from "./cloudinary"

const file_path="//Some File Path"

// Uploading image to cloudinary
cloudinary.uploader.upload(file_path, async function (err, result) {
  // If error during image upload
  if (err) {
    console.log(err);
  }
  // If image upload was successful
  else {
    // Do Something
  }
});
`;

const Cloudinary = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Cloudinary | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-5 dark:text-white">
      <h1 className="text-4xl font-medium">Cloudinary SDK Configuration</h1>
      <h2 className="py-5">
        Configures Cloudinary's SDK to upload assets to the Cloudinary CDN.
      </h2>

      <h3 className="mt-10 py-5 pl-1">Install Cloudinary SDK & Dotenv</h3>
      <CodeBlock code={`npm i cloudinary dotenv`} language="bash" />

      <div className="mt-10">
        <h3 className="py-2 pl-1 italic">
          Add the snippet using the Re-use-it! CLI.
        </h3>
        <CodeBlock
          code={`npx reuseit add-snippet cloudinary`}
          language="bash"
        />
      </div>

      <p className="py-10 text-lg font-semibold">OR</p>

      <h3 className="mt-10 py-5 pl-1 italic">cloudinary.ts</h3>
      <CodeBlock code={CloudinaryCode} language="typescript" />

      <h3 className="mt-10 py-5 pl-1 italic">test.ts</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default Cloudinary;
