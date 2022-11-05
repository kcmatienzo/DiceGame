
let btn = document.querySelector('.refresh-btn');

function rollDiceBtn() {
  console.log('Clicked!');
  let displayWinner = document.querySelector('#displayWinner');
  let randomNumber1 = Math.floor((Math.random() * 6) + 1);
  let randomNumber2 = Math.floor((Math.random() * 6) + 1);

  let img1 = document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png');

  let img2 = document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png');

  if (randomNumber1 > randomNumber2) {
    displayWinner.textContent = 'Player 1 wins!';
  } else if (randomNumber1 < randomNumber2) {
    displayWinner.textContent = 'Player 2 wins!';
  } else {
    displayWinner.textContent = 'It\'s a tie!';
  }


};


btn.addEventListener('click', rollDiceBtn)