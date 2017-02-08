import readline from 'readline-sync'

const answer = Math.floor(Math.random() * 100) + 1
var count = 10

const exit = 'exit'


const isValidGuess = (input) => {
  return parseInt(input) === true || (parseInt(input) < 100 && parseInt(input) > 0 )
}

const getInput = () => {
  let guess
  do {
    guess = readline.question( 'A number between 1 and 100 please: ' )
    if (guess === exit) {
      return guess
    }
  } while(!isValidGuess(guess))
  return parseInt(guess)
}

const checkForWin = (guessInput) => {
  if ( guessInput === answer ) {
    console.log('You Win!')
    exit
  } else {
    let difference = answer - guessInput
    if ( difference < 0 ) {
      console.log( 'Your guess is too high!' )
    } else {
      console.log( 'Your guess is too low!' )
    }
  }
}

const guessTheNumber = () => {
  let guessInput = getInput()
  if ( guessInput === exit ){
    count - 10
  } else {
    checkForWin( guessInput )
  }
}
do{
  guessTheNumber()
  count--
}
while (count > 0 && getInput !== exit)
// {
//   guessTheNumber()
// }
