
  var userGuess = document.querySelector('.inputGuess');
  var userGuessButton = document.querySelector('#userGuessButton');
  var lastGuess = document.querySelector('.lastGuess');
  var outputText = document.querySelector('.outputText');
  var randomNumber = Math.floor(Math.random() * 100 + 1); 

  userGuessButton.addEventListener ('click', function() {
    event.preventDefault();
    getGuess()
    resetDisable();
  });

  userGuess.addEventListener('keypress', clearDisable);

  document.querySelector('#userReset').addEventListener('click',resetGame)

function compareGuess() {
  var userInput = parseInt(userGuess.value, 10);
  if (isNaN (userInput)) {
    outputText.innerText = "That is not a number. Try again!"
    lastGuess.innerText = 'XX';
  }
  else if (userInput > 100 || userInput < 1) {
    outputText.innerText = "That is outside my range.";
    lastGuess.innerText = 'XX'
  }
  else if (userInput > randomNumber) {
    outputText.innerText = "That is too high.";
  }
  else if (userInput < randomNumber) {
    outputText.innerText = "That is too low.";
  }
  else {
    outputText.innerText = "BOOM!";
  }
}

function getGuess() {
    var displayGuess = userGuess.value;
    lastGuess.innerText = displayGuess;
    compareGuess();
  }

function resetGame () {
    userGuess.value = "";
    lastGuess.innerText = "";
    outputText.innerText = "";
    clearDisable();
    resetDisable();
  }

function clearDisable() {
var clearButton = document.querySelector('#userClearButton');
if (userGuess.value == '') {
  clearButton.disabled = true;
}
  else {
    clearButton.disabled = false;
  }
}

function resetDisable () {
  var resetButton = document.querySelector('#userReset')
  if (lastGuess.innerText == '') {
    resetButton.disabled = true;
  }
  else {
    resetButton.disabled = false;
  }
}
