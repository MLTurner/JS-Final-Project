//Selecting icons of rock, paper, scissors
const choices = document.querySelectorAll('.fa-solid');

//Variables to define the key parts of the game
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    you: 0,
    computer: 0
}

//Play the game: user clicks target of rock, paper, or scissors
//Computer makes its choice
//Winner is determined by comparing the two, then displayed
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

   showWinner(winner, computerChoice);
}


//Get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
        }
}

//If/else statements to compare choices and determine winner
function getWinner(p, c) {
    if(p === c) {
        return 'draw';
    } else if(p === 'rock') {
        if(c === 'paper') {
        return 'computer';
        } else {
        return 'you';
        }
    } else if( p === 'paper') {
        if(c === 'scissors') {
        return 'computer';
        } else {
        return 'you';
        }
    } else if(p === 'scissors') {
        if (c === 'rock') {
        return 'computer';
        } else {
        return 'you';
        }
    }
}

//Scoreboard increments by 1 to player or computer, or a tie is declared
//Interpolated strings to dynamically place choices within HTML in modal
function showWinner(winner, computerChoice) {
    if(winner === 'you') {
    scoreboard.you++;
    result.innerHTML = `<h1 class="text-win">You Win!</h1>
    <i class="fa-solid fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
    } else if(winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = `<h1 class="text-lose">You Lose!</h1>
    <i class="fa-solid fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
    } else {
    result.innerHTML = `<h1>It's a Tie!</h1>
    <i class="fa-solid fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
    }
    score.innerHTML = 
    `<p>You: ${scoreboard.you}</p>
    <p>Computer: ${scoreboard.computer}</p>`;
    
    modal.style.display = 'block';  
}

//Restart Game to set scoreboard to 0
function restartGame(){
    scoreboard.you = 0;
    scoreboard.computer = 0;
    score.innerHTML = 
    `<p>You: 0</p>
    <p>Computer: 0</p>`;
}

//Click outside the modal to make it disappear
function clearModal(e) {
    if(e.target == modal) {
    modal.style.display = 'none';
    }
}


//Event Listeners to loop through the options, clear modal and restart
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
