// Assignment Code
var generateBtn = document.querySelector("#generate");
 
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["!","@","#","$","%","^","&","*","(",")"]

var w = Math.floor(Math.random() * lowercase.length)
var x = Math.floor(Math.random() * uppercase.length)
var y = Math.floor(Math.random() * numeric.length)
var z = Math.floor(Math.random() * specialChar.length)

function getRandomLower () {
  return lowercase[w];
}

function getRandomUpper () {
  return uppercase[x];
}

function getRandomNumber () {
  return numeric[y];
}

function getRandomSpecial () {
  return specialChar[z];
}

var randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
}


// Write password to the #password input
function writePassword() {
  var pwLength = + prompt("How many characters would you like? Please choose between 8 and 128");

  if (pwLength >= 8 && pwLength <= 128 && isNaN(pwLength) === false) {
          var lowerQuestion = confirm("Would you like to include lowercase characters?");
          var upperQuestion = confirm("Would you like to include uppercase characters?");
          var numberQuestion = confirm("Would you like to include numeric characters?");
          var specialQuestion = confirm("Would you like to include special characters?");
      } else {
        alert("ERROR: Please choose a number between 8 and 128 characters");
      }

  console.log (pwLength)

  if (lowerQuestion === false && upperQuestion === false && numberQuestion === false && specialQuestion === false){
    alert("ERROR: Please select at least one of the following character types: lowercase, uppercase, number, special")
  }

  var hasLower = (lowerQuestion === true)
  var hasUpper = (upperQuestion === true)
  var hasNumber = (numberQuestion === true)
  var hasSpecial = (specialQuestion === true)

  console.log (hasLower, hasUpper, hasNumber, hasSpecial)

  function generatePassword () {
    var array = [];
    array.length = pwLength
    
  }

  // var generatePassword = (hasLower, hasUpper, hasNumber, hasSpecial, pwLength)

  // function generatePassword (){
  //   var generatedPassword = "";
  //   var typesCount = lower + upper + number + special;

  //   console.log(typesCount)
  // }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var Lower = "abcdefghijklmnopqrstuvwxyz"
// var Numeric = "0123456789"
// var Special = "!@#$%^&*()"

// // var lowerCase = confirm("Would you like to include lowercase characters?");
// // var upperCase = confirm("Would you like to include uppercase characters?");
// // var numericChar = confirm("Would you like to include numeric characters?");
// // var specialChar = confirm("Would you like to include special characters?");

// var pwLength = prompt("How many characters would you like? Please choose between 8 and 128");


//   if (pwLength > 8 && pwLength < 128 && isNaN(pwLength) === false) {
//     ""
//   } else {
//     alert("ERROR: Please choose between 8 and 128 characters");

//   }
  

//   var lowerCase = confirm("Would you like to include lowercase characters?");
//   var upperCase = confirm("Would you like to include uppercase characters?");
//   var numericChar = confirm("Would you like to include numeric characters?");
//   var specialChar = confirm("Would you like to include special characters?");

//   if (lowerCase === false && upperCase === false && numericChar === false && specialChar === false) {
//     alert("ERROR: Please include at least one of the following characters: Lowercase, Uppercase, Numeric, or Special")
//   }