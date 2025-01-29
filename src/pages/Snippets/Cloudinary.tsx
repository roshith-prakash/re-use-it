import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

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
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Cloudinary SDK</h1>
      <h2 className="py-5 text-center">
        Configures Cloudinary's SDK to upload assets to its CDN.
      </h2>

      <h3 className="py-10 pl-1 italic">cloudinary.ts</h3>
      <CopyBlock
        text={CloudinaryCode}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="mt-8 pl-1 italic">test.ts</h3>
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

export default Cloudinary;
