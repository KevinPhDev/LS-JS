let flintstones = 'The Flintstones Rock!';

for (let padding = 0; padding < 10; padding += 1) {
  console.log(flintstones.padStart(padding + flintstones.length, ' '));
}
