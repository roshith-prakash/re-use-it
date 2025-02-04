export const breakUrlIntoPaths = (url: string) => {
  // Remove the protocol (e.g., 'http://') and domain (e.g., 'localhost:3000')
  const path = url.replace(/^https?:\/\/[^/]+/, "");

  // Split the remaining string into parts based on '/'
  const paths = path.split("/").filter(Boolean); // filter(Boolean) removes empty strings

  // Create an array of paths, starting with "/components", etc.
  const fullPaths: string[] = [];

  // Build each path progressively
  paths.reduce((accumulatedPath, part) => {
    const currentPath = accumulatedPath + "/" + part;
    fullPaths.push(currentPath);
    return currentPath;
  }, "");

  return fullPaths;
};
