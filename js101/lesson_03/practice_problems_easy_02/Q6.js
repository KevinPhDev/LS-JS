let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let newFlintstones = [].concat(...flintstones);

console.log(newFlintstones);



let array = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let newArray = [];

array.forEach(element => {
  newArray = newArray.concat(element);
})

console.log(newArray);