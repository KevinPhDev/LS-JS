const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`Player: ${choice} \n=> Computer: ${computerChoice}`);

  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
    playerScore += 1;
  } else if (choice === computerChoice) {
    prompt("It's a draw!");
  } else {
    prompt('Computer wins!');
    computerScore += 1;
  }
}

function checkBestOfFive() {
  if (playerScore === 3) {
    resetScore();
    console.log('Player wins best of five');
  } else if (computerScore === 3) {
    resetScore();
    console.log('Computer wins best of five');
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
  prompt(`Player: ${playerScore} \nComputer: ${computerScore}`);
  checkBestOfFive();

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}