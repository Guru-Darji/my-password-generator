// Assignment Code


var generateBtn = document.querySelector("#generate");




  var smolLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["|", "~", "!", "@", "$", "%", "&", "?"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  var count = "";
  var checksmolLetters;
  var checkbigLetters;
  var checkspecial;
  var checknumbers;
  
  function generatePassword() {
    var count = (prompt("Please enter the amount of characters you would like in your password."));

  while(count <= 8 || count >= 128){
    alert("That is not the correct amount, Please enter 8 - 128 charaters ONLY!")
    var count = (prompt("How characters would you like your password to be? MUST BE BETWEEN 8-128!"))
  }

  var checksmolLetters = confirm("Click OK, if you would like to include Lowercase letters");
  var checkbigLetters = confirm("Click OK, if you would like to include Uppercase letters");
  var checkspecial = confirm("Click OK, if you would like to include Special characters");
  var checknumbers = confirm("Click OK, if you would like to include Numbers");

  
}
  var masterPassword = []

  if (checksmolLetters) {
    masterPassword = masterPassword.concat(smolLetters)
  }

  if (checkbigLetters) {
    masterPassword = masterPassword.concat(bigLetters)
  }
    
  if (checkspecial) {
    masterPassword = masterPassword.concat(special)
  }

  if (checknumbers) {
    masterPassword = masterPassword.concat(numbers)
  }


  console.log(masterPassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
