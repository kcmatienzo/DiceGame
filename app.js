
let btn = document.querySelector('.refresh-btn');
var score1 = 0;
var score2 = 0;

function rollDiceBtn() {
  console.log('Clicked!');
  let displayWinner = document.querySelector('#displayWinner');
  let randomNumber1 = Math.floor((Math.random() * 6) + 1);
  let randomNumber2 = Math.floor((Math.random() * 6) + 1);
  let player1Score = document.querySelector('.player1score');
  let player2Score = document.querySelector('.player2score');
  document.querySelector('.score').style.visibility = 'visible';

  let img1 = document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png');

  let img2 = document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png');

  if (randomNumber1 > randomNumber2) {
    displayWinner.textContent = 'Player 1 wins!';
    score1++;
    player1Score.textContent = score1;
    console.log(player1Score)
    
  } else if (randomNumber1 < randomNumber2) {
    displayWinner.textContent = 'Player 2 wins!';
    score2++;
    player2Score.textContent = score2;
    console.log(player2Score)
    
  } else {
    displayWinner.textContent = 'It\'s a tie!';
  }
};


btn.addEventListener('click', rollDiceBtn)