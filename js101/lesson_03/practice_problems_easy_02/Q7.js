let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let flintstonesArray = Object.entries(flintstones);

let barneyArray = flintstonesArray[2].slice(0, 2);

console.log(flintstonesArray);
console.log(barneyArray);