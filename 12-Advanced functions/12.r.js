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

function showConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;
  
  document.querySelector('.js-reset-confirm-yes').addEventListener('click', () => {resetScore()
    document.querySelector('.js-reset-confirmation')
    .innerHTML = '';});

  document.querySelector('.js-reset-confirm-no').addEventListener('click', () => {
    document.querySelector('.js-reset-confirmation')
    .innerHTML = '';
  })
}



function resetScore() {
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
  document.querySelector('.js-result')
  .innerHTML='';
  document.querySelector('.js-moves')
  .innerHTML='';

  showConfirmation();
}



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

let isAutoPlayOn = false;
let Interval_id;

function autoPlay() {
if (isAutoPlayOn) {
  clearInterval(Interval_id);
  isAutoPlayOn = false;
  autoPlayButton.innerHTML = 'Auto Play';
} else {
  Interval_id = setInterval(() => {
    playGame(pickComputerMove());
  }, 1 * 1000)
  isAutoPlayOn=true;
  autoPlayButton.innerHTML = 'Stop playing';
}
}


document.querySelector('.js-rock-button')
.addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button')
.addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
  playGame('scissors');
});

const autoPlayButton = document.querySelector('.js-auto-play-button');
const autoPlayEvent = () => autoPlay();
autoPlayButton.addEventListener('click', autoPlayEvent);

const resetButton = document.querySelector('.js-reset-button');
resetButton.addEventListener('click', () => showConfirmation());


document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetScore();
  }
})

