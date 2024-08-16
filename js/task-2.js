function makeArray(firstArray, secondArray, maxLength) {
  // Combine the firstArray and secondArray into a new array
  const combinedArray = firstArray.concat(secondArray);
  
  // If the combinedArray length exceeds maxLength, slice it to maxLength
  if (combinedArray.length > maxLength) {
    return combinedArray.slice(0, maxLength);
  }
  
  // Otherwise, return the entire combinedArray
  return combinedArray;
}

// Test cases
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
