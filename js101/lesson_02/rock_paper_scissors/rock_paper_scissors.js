const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
let choice = readline.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt('Invalid choice');
  choice = readline.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`Player: ${choice} Computer: ${computerChoice}`);

if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
  prompt('You win!');
} else if ((choice === 'rock' && computerChoice === 'paper') ||
           (choice === 'paper' && computerChoice === 'scissors') ||
           (choice === 'scissors' && computerChoice === 'rock')) {
  prompt('Computer wins!');
} else {
  prompt("It's a tie");
}