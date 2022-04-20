//defining our icons of rock, paper, scissors
const choices = document.querySelectorAll('.fa-solid');

//defining our score
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

// Play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
}

// Event Listeners to loop through our choices
choices.forEach(choice => choice.addEventListener('click', play));