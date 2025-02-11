import { useEffect } from "react";
import { CodeBlock } from "../../components";

const compressionCode = `import imageCompression from "browser-image-compression";

export const compressImage = async (file) => {
  const options = {
    maxSizeMB: 1, // Maximum file size (in MB)
    useWebWorker: true, // Improves performance
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Error during image compression:", error);
    throw error;
  }
};
`;

const usingCode = `import {compressImage} from "./compressImage.ts"
import {useState,useRef,ChangeEvent} from "react"

const App = () =>{
    const [imageFile,setImageFile]=useState<File>()
    const fileRef = useRef()
    
    const submit = async() =>{
        const formData = new FormData();
        const compressedFile = await compressImage(imageFile);
        formData.append("file", compressedFile);

        await fetch("/randomUrl", {
            method: "POST",
            body: formData,
        });
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    let extension = e.target.files[0]?.name?.split(".").pop();

    let allowedExtensions = ["jpg", "png", "jpeg"];

    if (!allowedExtensions.includes(extension)) {
      fileRef.current.value = null;
      return;
    }

    setImageFile(e.target.files[0]);

    fileRef.current.value = null;
  };

    return ( 
        <input
            className="hidden"
            type="file"
            ref={fileRef}
            accept="image/png, image/jpg, image/jpeg"
            onChange={handleFileChange}
        />
    )
}`;

const ImageCompression = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Image Compression | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Image compression</h1>
      <h2 className="py-5">
        Compresses image using the browser-image-compression library.
      </h2>

      <h3 className="mt-10 py-5 pl-1">Install browser-image-compression</h3>
      <CodeBlock code={`npm i browser-image-compression`} language="bash" />

      <div className="mt-10">
        <h3 className="py-2 pl-1 italic">
          Add the snippet using the Re-use-it! CLI.
        </h3>
        <CodeBlock
          code={`npx reuseit add-snippet imagecompression`}
          language="bash"
        />
      </div>

      <p className="py-10 text-lg font-semibold">OR</p>

      <h3 className="mt-10 py-5 pl-1 italic">compressImage.ts</h3>
      <CodeBlock code={compressionCode} language="typescript" />

      <h3 className="mt-10 py-5 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default ImageCompression;
