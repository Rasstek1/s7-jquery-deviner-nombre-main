


  // generate a random number between 1 and 10
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  
  // get references to the input, button, message, and previousGuesses elements
  var guessInput = document.getElementById("essaiInput");
  const essaiButton = document.getElementById("guessButton");
  var message = document.getElementById("message");
  var previousGuesses = document.getElementById("previousGuesses");

  // initialize an empty array to store previous guesses
  var guesses = [];

  // add a click event listener to the button
  essaiButton.addEventListener("click", function() {
    const essaiInput = document.getElementById("essai");
    const essaiValue = essaiInput.value;
    console.log("Essai: " + essaiValue);
    
    // check if the guess is a valid number
    if (isNaN(guess) || guess < 1 || guess > 100) {
      message.textContent = "Please enter a valid number.";
      return;
    }
    
    // check if the guess has already been made
    if (guesses.includes(guess)) {
      message.textContent = "You already guessed that number.";
      return;
    }
    
    // add the guess to the array of previous guesses
    guesses.push(guess);
    
    // remove the guessed number from the list of available numbers
    var guessedNumber = document.getElementByclass("nombre" + guess);
    guessedNumber.parentNode.removeChild(guessedNumber);

    // check if the guess is correct
    if (guess === randomNumber) {
      message.textContent = "Congratulations! You guessed the number.";
    } else {
      var messageText = "Sorry, that's not the number. Guess again.";
      
      // check if the guess is higher or lower than the random number
      if (guess < randomNumber) {
        messageText += " The number is higher than " + guess + ".";
      } else {
        messageText += " The number is lower than " + guess + ".";
      }
      
      message.textContent = messageText;
      
      // add the guess to the list of previous guesses
      var guessItem = document.createElement("li");
      guessItem.textContent = guess;
      previousGuesses.appendChild(guessItem);
    }
  });

