export const capitalizeFirstLetters = (str: string) => {
  return str
    .split(" ") // Split the string into an array of words
    .map(
      (
        word, // Map over each word
      ) => word.charAt(0).toUpperCase() + word.slice(1), // Capitalize the first character
    )
    .join(" "); // Join the words back into a string
};
