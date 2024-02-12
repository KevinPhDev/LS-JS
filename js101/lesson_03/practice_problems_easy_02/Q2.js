let numbers = [1, 2, 3, 4, 5];

let numbers2 = numbers.slice(0).reverse();

console.log(numbers);
console.log(numbers2);

let numbers3 = [1, 2, 3, 4, 5];

let numbers4 = [...numbers3].sort((num1, num2) => num2 - num1);

console.log(numbers3);
console.log(numbers4);