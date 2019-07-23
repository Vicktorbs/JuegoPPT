const choices = document.querySelectorAll('.choice');
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
    const computerChoide = getComputerChoice();
    const winer = getWinner(playerChoice, computerChoide);
    showWinner(winer, computerChoide)
}

// Get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock'
    } else if (rand <= 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

// Get game winner
function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock') {
        if (computer === 'paper') {
          return 'computer';
        } else {
          return 'player';
        }
    } else if (player === 'paper') {
        if (computer === 'scissors') {
          return 'computer';
        } else {
          return 'player';
        }
    } else if (player === 'scissors') {
        if (computer === 'rock') {
          return 'computer';
        } else {
          return 'player';
        }
    }
}

function showWinner(winner, computerChoide) {
    if (winner === 'player') {
        // Icon player score
        scoreboard.player++;
        // Show modal result
        result.innerHTML = `
            <h3 class="text-win">Ganaste!</h3>
            <i class="fas fa-hand-${computerChoide}   fa-10x"></i>
            <p>Computer -> <strong>${computerChoide}</strong></p>
        `;
    } else if (winner === 'computer') {
        // Icon player score
        scoreboard.computer++;
        // Show modal result
        result.innerHTML = `
            <h3 class="text-lose">Perdiste!</h3>
            <i class="fas fa-hand-${computerChoide}   fa-10x"></i>
            <p>Computer -> <strong>${computerChoide}</strong></p>
        `;
    } else {
        result.innerHTML = `
            <h3>Empate!</h3>
            <i class="fas fa-hand-${computerChoide}   fa-10x"></i>
            <p>Computer -> <strong>${computerChoide}</strong></p>
        `;
    }
    // Show score
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = 'block';
}

// Clear modal 
function cleanModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}

// Restart game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', cleanModal);
restart.addEventListener('click', restartGame);