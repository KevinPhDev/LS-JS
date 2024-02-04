let loanAmount = 100000;
let annualInterestRate = 0.06;
let loanDurationInYears = 5.3;


const monthlyInterestRate = annualInterestRate / 12;
const loanDurationInMonths = loanDurationInYears * 12;

const monthlyPayment = loanAmount * (monthlyInterestRate /
(1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

console.log(monthlyPayment);