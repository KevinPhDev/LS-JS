let numbers = [1, 2, 3, 4];
numbers.length = 0;

let array = [1, 2, 3, 4];
array.splice(0, array.length);

let numbersArray = [1, 2, 3, 4];
while (numbersArray.length) {
  numbersArray.pop();
}