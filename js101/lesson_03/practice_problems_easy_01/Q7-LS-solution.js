let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino'); 
str2.includes('Dino');

//Alternate Solution 1
str1.match('Dino') !== null;
str2.match('Dino') !== null;

//Alternate Solution 2
str1.indexOf('Dino') > -1;
str2.indexOf('Dino') > -1;