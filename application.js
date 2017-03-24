// Create a rock paper scissors game that runs until one player has three wins

// Store the player names and number of wins for each player in variables
// Use a while loop to run the game until one player has 3 wins
// Use parseInt(Math.random()*10)%3 to generate a random number from 0 to 2 (0 == rock, 1 == paper, 2 == scissors)

// Rules: 
// scissors(2) > paper(1)
// paper(1) > rock(0)
// rock(0) > scissors(2)

// Output each player’s hand to the console
// Use if statements to determine a winner of the round
// Output the round winner’s name to the console
// Keep track of how many rounds each player has won
// When one player wins 3 rounds, announce that player’s name as the game winner



const gamePiece = [
  'rock',
  'paper', 
  'scissors'
];

function hand(x) {
  return gamePiece.indexOf(x);
}

console.log(hand('scissors'));

// TODO
// var outcomeMessage = ???

function game(a, b) {
    if (hand(a) > hand(b)) {
      var outcome = `${a} beats ${b}`;
    } else if (hand(a) < hand(b)) {
      var outcome = `${b} beats ${a}`;
    } else {
      var outcome = `${a} is the equal to ${b}. The game is tie!`;
    }
  return outcome;
}

console.log(game('scissors', 'paper'));

// var gamePlayer = [
// {
//   name: 
// }]