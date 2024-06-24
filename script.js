'use strict';
/*
console.log(document.querySelector('.message').textContent);

// changes to the new content
document.querySelector('.message').textContent = 'Correct Number🔥';

// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number🔥')
// );

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;

// console.log(document.querySelector('.guess').value);
console.log((document.querySelector('.guess').value = 90));
*/

// HANDLING THE CLICK EVENTS
// const x = function () {
//   console.log(document.querySelector('.guess').value);
// };
// document.querySelector('.check').addEventListener('click', x);

// project of guessing the number

let secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
console.log(secretNum);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess); // return the value in the form of string

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!🤣';
    displayMessage('No Number!🤣');
  }
  // if and only if the score is greater than zero
  else {
    if (score > 1) {
      // when the player wins
      if (guess === secretNum) {
        // document.querySelector('.message').textContent =
        //   'Your Guess is Correct !!!😍';

        displayMessage('Your Guess is Correct !!!😍');

        document.querySelector('.highscore').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        } else {
          highScore = highScore;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else if (guess !== secretNum) {
        // if the guess is too high
        //using the ternary operator
        // if the guess is too low

        // document.querySelector('.message').textContent =
        //   guess > secretNum ? 'Too High!' : 'Too Low!';

        displayMessage(guess > secretNum ? 'Too High!' : 'Too Low!');
        score--;
      }
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'YOU LOST THE GAME!!!!😒';
      displayMessage('YOU LOST THE GAME!!!!😒');
    }
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // highScore = Math.max(score, prevScore);
  // document.querySelector('.highscore').textContent = highScore;
});
