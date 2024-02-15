let munstersDescription = "The Munsters are creepy and spooky.";

let munstersDescriptionArray = munstersDescription.split('');

function isUpperCase(letter) {
  return Boolean(letter.match(/[A-Z]/));
}

for (let i = 0; i < munstersDescriptionArray.length; i += 1) {
  let letter = munstersDescriptionArray[i];
  if (isUpperCase(letter)) {
    munstersDescriptionArray[i] = munstersDescriptionArray[i].toLowerCase();
  } else {
    munstersDescriptionArray[i] = munstersDescriptionArray[i].toUpperCase();
  }
}

let newMunstersDescription = munstersDescriptionArray.join('');

console.log(munstersDescription);
console.log(newMunstersDescription);

