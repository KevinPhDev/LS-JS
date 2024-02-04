const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Calculate your monthly interest rate");

prompt("What is your loan amount in $?");
let loanAmount = Number(readline.question());

prompt("What is your annual interest rate in %?");
let annualInterestRate = Number(readline.question() / 100);

prompt("What is your loan duration in years?");
let loanDurationInYears = Number(readline.question());

const monthlyInterestRate = annualInterestRate / 12;
const loanDurationInMonths = loanDurationInYears * 12;

const monthlyPayment = loanAmount * (monthlyInterestRate /
(1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

prompt(`This your your monthly payment $${monthlyPayment.toFixed(2)}`);