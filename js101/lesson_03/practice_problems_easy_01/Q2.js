let str1 = "Come over here!";
let str2 = "What's up, Doc?";

function checkExclamation(punctuation, string) {
  if (string[string.length - 1].includes(punctuation)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkExclamation('!', str1));
console.log(checkExclamation('!', str2));