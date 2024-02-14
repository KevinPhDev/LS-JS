let numbers = [1, 2, 3, 4];
let newNumbers = numbers.slice(0, 0);
console.log(newNumbers);

let array = [1, 2, 3, 4];
array.splice(0, array.length);
console.log(array);

let numbersArray = [1, 2, 3, 4];
while (numbersArray.length > 0) {
  numbersArray.pop();
}
console.log(numbersArray);

console.log([1, 2, 3] + [4, 5]);
// returns -> 1,2,34,5

