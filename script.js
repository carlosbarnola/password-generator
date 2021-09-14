// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //want to select length prompt
  const wantLength = window.confirm('Would you like to choose the length of your password?');
  console.log(wantLength);

  //want to select character type length prompt
  const wantType = window.confirm('Would you like to choose password character type?');
  console.log(wantType);  

  //length selection function
  var selectLength = function() {
    length = window.prompt('Select the length of you password. MUST be between 8 and 128 character.');
      if (length >= 8 && length <=128) {
        return length;
      } else {
        window.alert('Please select a valid range.');
          return selectLength();
      }
  }

  let passwordLength = wantLength ? selectLength() : 8;
  console.log(passwordLength);

  
  //character type selection questions
  const characterSelect = function () {
    wantUpper = window.confirm('Would your password to contain Upper Case?');

    wantLower = window.confirm('Would your password to contain Lower Case');

    wantNumeric = window.confirm('Would your password to contain Numeric');

    wantSymbols = window.confirm('Would your password to contain Symbols');

      //questions selection input
      if ((wantUpper + wantLower + wantNumeric + wantSymbols) == 0) {
        window.alert('Please select at least one character type');
        return characterSelect();
      } else {
        return {wantUpper, wantLower, wantNumeric, wantSymbols};
      }
  
  }

  
  let characterTypes = wantType 
    ? characterSelect() 
    : {wantUpper: true, wantLower: true, wantNumeric: true, wantSymbols:true};
  
    console.log(characterTypes);


  //password generation function
  const generatePassword = function() {
  let password = '';

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomNumeric() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbols() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }


  //select random from password generation
  let getRandomCharacter = function() {
    let types = '';
    
    if (characterTypes.wantUpper) {
      types = types + getRandomUpper();
    }

    if (characterTypes.wantLower) {
      types = types + getRandomLower();
    }

    if (characterTypes.wantNumeric) {
      types = types + getRandomNumeric();
    }

    if (characterTypes.wantSymbols) {
      types = types + getRandomSymbols();
    }
    console.log(types);

    return types[Math.floor(Math.random() * types.length)];
   
  }


  //loop for password generation
  for (i = 0; i < passwordLength; i++) {
    password = password + getRandomCharacter();  
  }

  
  
  return password;
}

//call and display password
var password = generatePassword();
var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);