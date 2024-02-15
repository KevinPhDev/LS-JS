function isAnIpNumber(num) {
  return num >= 0 && num <= 255;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}


console.log(isDotSeparatedIpAddress('22.44.11.77'));
console.log(isAnIpNumber('-5'));

