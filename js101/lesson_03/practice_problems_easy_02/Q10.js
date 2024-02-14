let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let tNumberOne = 0;
let tNumberTwo = 0;

statement1.split('').forEach(letter => {
  if (letter === 't') {
    tNumberOne += 1;
  }
})

statement2.split('').forEach(letter => {
  if (letter === 't') {
    tNumberTwo += 1;
  }
})

console.log(statement1.split(''));
console.log(statement2.split(''));
console.log(tNumberOne);
console.log(tNumberTwo);