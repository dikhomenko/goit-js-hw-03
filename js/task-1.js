function slugify(title) {
  // Приводимо рядок до нижнього регістру і замінюємо пробіли на тире
  return title
    .toLowerCase()         // Перетворює рядок до нижнього регістру
    .replace(/\s+/g, '-')  // Замінює один або більше пробілів на тире
    .replace(/[^\w-]/g, ''); // Видаляє всі небуквені символи, крім тире
}

// Перевірка функції
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
