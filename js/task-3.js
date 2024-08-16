function filterArray(numbers, value) {
  // Create an empty array to store numbers greater than value
  const result = [];
  
  // Iterate over each number in the numbers array
  for (let i = 0; i < numbers.length; i++) {
    // Check if the current number is greater than the specified value
    if (numbers[i] > value) {
      // Add the number to the result array if it meets the condition
      result.push(numbers[i]);
    }
  }
  
  // Return the result array
  return result;
}

// Test cases
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
