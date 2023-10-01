let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses:0,
  ties:0
};
/*
if (score===null) {
  score = {
    wins: 0,
    losses:0,
    ties:0
  }
}
*/

updateScoreElement();

console.log(JSON.parse(localStorage.getItem('score')));

function playGame(playerMove) {
  const computerMove=pickComputerMove();
  let result = '';
  if (playerMove==='scissors') {
    if (computerMove === 'rock') {
      result = 'You lose!';
    } else if (computerMove === 'paper') {
      result = 'You win!';
    } else {
      result = 'A tie!'
    }
  } else if (playerMove==='paper') {
    if (computerMove === 'rock') {
      result = 'You win!';
    } else if (computerMove === 'paper') {
      result = 'A tie!';
    } else {
      result = 'You lose!'
    }
  } else if (playerMove==='rock') {
    if (computerMove === 'rock') {
      result = 'A tie!';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else {
      result = 'You win!'
    }
  }
  document.querySelector('.js-result')
  .innerHTML = result;

  document.querySelector('.js-moves')
  .innerHTML = `You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">  
  <img src="images/${computerMove}-emoji.png" class="move-icon"> 
  computer`;



  if (result === 'You win!') {
    score.wins+=1
  } else if (result === 'You lose!') {
    score.losses+=1;
  } else {
    score.ties+=1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
}


function pickComputerMove() {
  const randomNum = Math.random();  

  let computerMove = '';

  if (randomNum< 1/3) {
    computerMove ='rock';
  } else if (randomNum>=1/3 && randomNum<2/3) {
    computerMove ='paper';
  } else {
    computerMove ='scissors'; 
  }
  return computerMove;
}

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML=`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}