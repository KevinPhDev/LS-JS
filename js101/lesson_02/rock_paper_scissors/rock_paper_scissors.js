const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`Player: ${choice} \n=> Computer: ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'rock')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
              (choice === 'paper' && computerChoice === 'scissors') ||
              (choice === 'scissors' && computerChoice === 'rock') ||
              (choice === 'rock' && computerChoice === 'lizard') ||
              (choice === 'spock' && computerChoice === 'lizard') ||
              (choice === 'scissors' && computerChoice === 'spock') ||
              (choice === 'lizard' && computerChoice === 'scissors') ||
              (choice === 'paper' && computerChoice === 'lizard') ||
              (choice === 'spock' && computerChoice === 'paper') ||
              (choice === 'rock' && computerChoice === 'spock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}\n
          You can type r, p, sc, sp and l`);
  let choice = readline.question();
  if (choice === 'r') choice = 'rock';
  if (choice === 'p') choice = 'paper';
  if (choice === 'sc') choice = 'scissors';
  if (choice === 'sp') choice = 'spock';
  if (choice === 'l') choice = 'lizard';

  while (!VALID_CHOICES.includes(choice)) {
    prompt('Invalid choice');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}