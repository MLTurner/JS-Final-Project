//Selecting icons of rock, paper, scissors
const choices = document.querySelectorAll('.fa-solid');

//defining our score
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    you: 0,
    computer: 0
}

// Play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

   showWinner(winner, computerChoice);
}

function majority(){
    if (scoreboard.you === 3){
        return result.innerHTML = `<h2>You win 3 out of 5!</h2>`
    }
    if (scoreboard.computer === 3){
        return result.innerHTML = `<h2>The Computer wins 3 out of 5!<h2>`
    }
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

// get game winner
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

//Restart Game
function restartGame(){
    scoreboard.you = 0;
    scoreboard.computer = 0;
    score.innerHTML = 
    `<p>You: 0</p>
    <p>Computer: 0</p>`;
}

//Clear modal
function clearModal(e) {
    if(e.target == modal) {
    modal.style.display = 'none';
    }
}

// Event Listeners to loop through our choices
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
majority()