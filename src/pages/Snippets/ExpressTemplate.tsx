import { useEffect } from "react";
import { CodeBlock } from "../../components";

const serverFile = `import http from "http";
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors, { CorsOptions } from "cors";
dotenv.config();

// Importing Routes ----------------------------------------------------------------------------------------------

import routes from "./routes/index.ts";

// Initializing Server -------------------------------------------------------------------------------------------

const app = express();
let server = http.createServer(app);

// Using Middleware -------------------------------------------------------------------------------------------

// Whitelist for domains from which requests should be allowed
const whitelist = ["http://localhost:3000"];

// Function to deny access to domains except those in whitelist.
const corsOptions: CorsOptions = {
  origin: function (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) {
    // Find request domain and check in whitelist.
    if (origin && whitelist.indexOf(origin) !== -1) {
      // Accept request
      callback(null, true);
    } else {
      // Send CORS error.
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Parses request body.
app.use(express.urlencoded({ extended: true }));
// Parses JSON passed inside body.
app.use(express.json());
// Enable CORS
app.use(cors(corsOptions));
// Add security to server.
app.use(helmet());

// Routes -------------------------------------------------------------------------------------------

// Default route to check if server is working.
app.get("/", (req, res) => {
  res.status(200).send("We are good to go!");
});

// Routes -----------------------------------------------------------------------------------------

app.use("/api/v1", routes);

// Listening on PORT -------------------------------------------------------------------------------------------

server.listen(process.env.PORT || 4000, () => {
  console.log(\`Server running on port \${process.env.PORT || 4000}\`);
});`;

const controller = `import { Request, Response } from "express";

// Example Controller Function
export const getName = async (req: Request, res: Response): Promise<void> => {
  try {
    //Add your controller specific code here
    res.status(200).send("John Doe");
    return;
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
    return;
  }
};`;

const route = `import { Router } from "express";
import { getName } from "../controllers/index.js";

// Create a router.
const router = Router();

// Default route to check if auth routes are accessible.
router.get("/", (_, res) => {
  res.status(200).send({ data: "Default Route" });
});

// Example Route
router.get("/getName", getName);

export default router;`;

const ExpressTemplate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Express Server Template | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Express Server Template</h1>
      <h2 className="py-5">
        A template to spin up a Express.JS server quickly.
      </h2>

      <h3 className="mt-10 py-5 pl-1">Folder structure.</h3>
      <pre>
        {`
        express-template/
        ├── controllers/ 
        │ └── index.ts 
        ├── routes/ 
        │ └── index.ts 
        ├── index.ts 
        ├── package.json 
        └── package-lock.json 
        `}
      </pre>

      <h3 className="mt-10 py-5 pl-1">Install the required packages.</h3>
      <CodeBlock
        code={`npm i cors dotenv express helmet
npm i -D @types/cors @types/express @types/node ts-node typescript`}
        language="bash"
      />

      <div className="mt-10">
        <h3 className="py-2 pl-1 italic">
          Add the index file snippet using the Re-use-it! CLI.
        </h3>
        <CodeBlock
          code={`npx reuseit add-snippet expressTemplate`}
          language="bash"
        />
      </div>

      <h3 className="mt-10 py-5 pl-1 italic">index.ts</h3>
      <CodeBlock code={serverFile} language="typescript" />

      <h3 className="mt-10 py-5 pl-1 italic">controller/index.ts</h3>
      <CodeBlock code={controller} language="typescript" />

      <h3 className="mt-10 py-5 pl-1 italic">routes/index.ts</h3>
      <CodeBlock code={route} language="typescript" />
    </div>
  );
};

export default ExpressTemplate;
