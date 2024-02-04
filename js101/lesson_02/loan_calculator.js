let loanAmount = 100000;
let monthlyInterestRate = 0.005;
let loanDurationInMonths = 120;

const monthlyPayment = loanAmount * (monthlyInterestRate /
(1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

console.log(monthlyPayment);