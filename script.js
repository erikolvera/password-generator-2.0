// Assignment code here
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','<','>','?',]
var characterLength = 8
var finalPassword = []


function generatePassword() {
  console.log("Button was clicked!")

// 1. Prompt user for the password criteria
//    a. Password should be 8-128 characters 
var userInput = prompt("How many characters? (Between 8 and 128 characters)")
var userInputNumber = parseInt(userInput)
console.log(parseInt(userInput))

// 2. Input is validated 
if (isNaN(userInputNumber) || userInputNumber < 8 || userInputNumber > 128) {
  alert ("It has to be between 8 and 128 characters")
  return false;
}

//    a. Lowercase, uppercase, numberic, and/or special characters
var userWantsUppercase = confirm("Would you like uppercase letters?")
console.log(userWantsUppercase)

var userWantsLowercase = confirm("Would you like lowercase letters?")
console.log(userWantsLowercase)

var userWantsNumbers = confirm("Would you like numbers?")
console.log(userWantsNumbers)

var userWantsSpecialCharacters = confirm("Would you like special characters?")
console.log(userWantsSpecialCharacters)

if (userWantsUppercase) {
  finalPassword = finalPassword.concat(upperCase)
}
if (userWantsLowercase) {
  finalPassword = finalPassword.concat(lowerCase)
}
if (userWantsNumbers) {
  finalPassword = finalPassword.concat(numbers)
}
if (userWantsSpecialCharacters) {
  finalPassword = finalPassword.concat(specialCharacters)
}
// arr.flat() = will return the flattened out array
var password = ''
// Math.floor(Math.random() * MAX_VALUE of random number (in this case it would be the length of the container))
for(var i = 0; i < userInputNumber; i++) {
  var addedIndex = Math.floor(Math.random() * finalPassword.length);
  password = password + finalPassword[addedIndex];
}

  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
