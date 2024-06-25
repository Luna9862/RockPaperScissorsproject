// Define player objects
const player1 = {
    name: "User",
    score: 0,
    hand: null,
    // getHand() {
    //     // Implement how user's choice will be determined
    //     // For simplicity, return a random choice initially
    //     const choices = ['rock', 'paper', 'scissors'];
    //     return choices[Math.floor(Math.random() * choices.length)];
    // }
};

const player2 = {
    name: "Mickey",
    score: 0,
    getHand() {
        // Implement how Mickey's choice will be determined
        // For simplicity, return a random choice initially
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }
};

// Function to handle the click event of the play button
// document.getElementById('play-button').addEventListener('click', function() {
//     playRound(player1, player2);
// });

document.getElementById('scissorsButton').addEventListener('click', function() {
    player1.hand = 'scissors';
    playRound(player1, player2);
})
document.getElementById('paperButton').addEventListener('click', function() {
    player1.hand = 'paper';
    playRound(player1, player2);
})
document.getElementById('rockButton').addEventListener('click', function() {
    player1.hand = 'rock';
    playRound(player1, player2);
})

// Function to update scores on the HTML page
function updateScores(player1, player2) {
    document.getElementById('user-score').textContent = player1.score;
    document.getElementById('Mickey-score').textContent = player2.score;
}

// Function to update the winner box
function updateWinner(winner) {
    const winnerElement = document.getElementById('winner-box');
    winnerElement.textContent = `${winner} wins!`;
}

// Function to play a round of Rock Paper Scissors
function playRound(player1, player2) {
    const hand1 = player1.hand;
    const hand2 = player2.getHand();

    console.log(`player1 (${player1.name}) hand: ${hand1}`);
    console.log(`player2 (${player2.name}) hand: ${hand2}`);

    if (hand1 === hand2) {
        console.log("It's a tie!");
    } else if ((hand1 === "rock" && hand2 === "scissors") ||
               (hand1 === "paper" && hand2 === "rock") ||
               (hand1 === "scissors" && hand2 === "paper")) {
        console.log(`Winner: ${player1.name}`);
        player1.score++;
        updateWinner(player1.name);
    } else {
        console.log(`Winner: ${player2.name}`);
        player2.score++;
        updateWinner(player2.name);
    }

    updateScores(player1, player2);
}

// Initial update of scores when the page loads
updateScores(player1, player2);
