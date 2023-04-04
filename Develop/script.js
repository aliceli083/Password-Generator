// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

  var password = ""

  // Add event listener to generate button
  var includeLowercase = "abcdefghijklmnopqrstuvwxyz"

  var includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var includeNumbers = "0123456789"

  var includeSpecialChars = "!@#$%^&*()_+-=[]{};':,./<>?~`"

  var passwordsize = prompt("How long do you want your password to be")
  if (passwordsize > 8 && passwordsize < 128) {
    const Lowercase = confirm("Do you want to include lowercase letters?")
    const Uppercase = confirm("Do you want to include uppercase letters?")
    const Numbers = confirm("Do you want to include numbers?")
    const SpecialChars = confirm("Do you want to include special characters?")
    for (var i=0; i<passwordsize; i++){
      if (Lowercase&&password.length<passwordsize) {
        var randomposition = Math.floor(Math.random() * 26)
        password = password + includeLowercase[randomposition]
      }
      if (Uppercase&&password.length<passwordsize) {
        var randomposition = Math.floor(Math.random() * 26)
        password = password + includeUppercase[randomposition]
      }
      if (Numbers&&password.length<passwordsize) {
        var randomposition= Math.floor(Math.random() * 10)
        password = password + includeNumbers[randomposition]
      }
      if (SpecialChars&&password.length<passwordsize) {
        var randomposition= Math.floor(Math.random() * 29)
        password = password + includeSpecialChars[randomposition]
      }
    }
    
  }
  else {
    alert("password length invalid")
  }
  return password
}
generateBtn.addEventListener("click", writePassword);