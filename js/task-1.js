function slugify(title) {
  // Lower the string and replace spaces with dashes
  return title
    .toLowerCase()         // Converts a string to lower case
    .replace(/\s+/g, '-')  // Replaces one or more spaces with dashes
    .replace(/[^\w-]/g, ''); // Removes all non-alphanumeric characters except dashes
}

// Function check
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
