'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Please Enter a Number!';

    //when the player win
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'You win ! 🎉';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when the guess is wrong ( Refactoring the code)
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number
          ? 'Your guess is too high ⏫'
          : 'Your guess is too low ⏬';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ! 😣';
      document.querySelector('.score').textContent = 0;
    }
    // when the guess is too high
  }
});

// when the guess is too low

//    else if (guess < number) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Your guess is too low ⏬';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game ! 😣';
//       document.querySelector('.score').textContent = 0;
//     }
//     // when the guess is too high
//   } else if (guess > number) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Your guess is too high ⏫';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game ! 😣';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});
