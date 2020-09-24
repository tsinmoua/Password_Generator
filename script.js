// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialChar = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {
  var pwLength = + prompt("How many characters would you like? Please choose between 8 and 128");

  if (pwLength >= 8 && pwLength <= 128 && isNaN(pwLength) === false) {
    var lowerQuestion = confirm("Would you like to include lowercase characters?");
    var upperQuestion = confirm("Would you like to include uppercase characters?");
    var numberQuestion = confirm("Would you like to include numeric characters?");
    var specialQuestion = confirm("Would you like to include special characters?");
  } else {
    alert("ERROR: Please choose a number between 8 and 128 characters");
  }

  // console.log(pwLength)

  if (lowerQuestion === false && upperQuestion === false && numberQuestion === false && specialQuestion === false) {
    alert("ERROR: Please select at least one of the following character types: lowercase, uppercase, number, special")
  }

  var allowed = "";

  if (lowerQuestion === true) {
    allowed += lowercase;
  }
  if (upperQuestion === true) {
    allowed += uppercase;
  }
  if (numberQuestion === true) {
    allowed += numeric;
  }
  if (specialQuestion === true) {
    allowed += specialChar;
  }

  // console.log(allowed)

  var password = "";
  var length = pwLength;
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * allowed.length);
    password += allowed[random];
  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
