// Gun Water Snake Game - Complete Implementation

class Game {
  constructor() {
    this.choices = ["gun", "water", "snake"];
    this.emojis = {
      gun: "🔫",
      water: "💧",
      snake: "🐍",
    };

    this.playerScore = 0;
    this.computerScore = 0;
    this.currentRound = 1;
    this.maxRounds = 10;
    this.gameActive = false;

    // DOM Elements
    this.startScreen = document.getElementById("start-screen");
    this.gameContainer = document.getElementById("game-container");
    this.startBtn = document.getElementById("start-btn");
    this.resetBtn = document.getElementById("reset-btn");
    this.playAgainBtn = document.getElementById("play-again-btn");
    this.choiceButtons = document.querySelectorAll(".choice-btn");
    this.menuBtn = document.getElementById("menu-btn");
    this.linkList = document.getElementById("link-list");

    // Game Display Elements
    this.playerChoiceDisplay = document.getElementById("player-choice-display");
    this.computerChoiceDisplay = document.getElementById(
      "computer-choice-display"
    );
    this.roundNumberDisplay = document.getElementById("round-number");
    this.playerScoreDisplay = document.getElementById("player-score");
    this.computerScoreDisplay = document.getElementById("computer-score");
    this.resultBox = document.getElementById("round-result");
    this.resultText = document.getElementById("result-text");
    this.finalBox = document.getElementById("final-result");
    this.finalText = document.getElementById("final-text");

    this.initEventListeners();
  }

  initEventListeners() {
    // Start and Reset buttons
    this.startBtn.addEventListener("click", () => this.startGame());
    this.resetBtn.addEventListener("click", () => this.resetGame());
    this.playAgainBtn.addEventListener("click", () => this.resetGame());

    // Choice buttons
    this.choiceButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        if (this.gameActive) {
          const playerChoice = e.target.dataset.choice;
          this.playRound(playerChoice);
        }
      });
    });

    // Menu button
    this.menuBtn.addEventListener("click", () => {
      this.linkList.classList.toggle("hidden");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest("#links")) {
        this.linkList.classList.add("hidden");
      }
    });
  }

  startGame() {
    this.gameActive = true;
    this.playerScore = 0;
    this.computerScore = 0;
    this.currentRound = 1;

    this.startScreen.classList.add("hidden");
    this.gameContainer.classList.remove("hidden");
    this.finalBox.classList.add("hidden");

    this.updateDisplay();
    this.resetChoiceDisplays();
  }

  resetGame() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.currentRound = 1;
    this.gameActive = false;

    this.startScreen.classList.remove("hidden");
    this.gameContainer.classList.add("hidden");
    this.finalBox.classList.add("hidden");
    this.resultBox.classList.add("hidden");

    this.resetChoiceDisplays();
  }

  getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    }

    // Gun kills Snake, Snake drinks Water, Water douses Gun
    if (
      (playerChoice === "gun" && computerChoice === "snake") ||
      (playerChoice === "snake" && computerChoice === "water") ||
      (playerChoice === "water" && computerChoice === "gun")
    ) {
      return "player";
    }

    return "computer";
  }

  playRound(playerChoice) {
    const computerChoice = this.getComputerChoice();
    const result = this.determineWinner(playerChoice, computerChoice);

    // Update displays
    this.playerChoiceDisplay.textContent = this.emojis[playerChoice];
    this.computerChoiceDisplay.textContent = this.emojis[computerChoice];

    // Update result
    let resultMessage = "";
    if (result === "tie") {
      resultMessage = "🤝 It's a Tie!";
    } else if (result === "player") {
      this.playerScore++;
      resultMessage = "🎉 You Win This Round!";
    } else {
      this.computerScore++;
      resultMessage = "🤖 Computer Wins This Round!";
    }

    this.resultText.textContent = resultMessage;
    this.resultBox.classList.remove("hidden");

    // Update scores
    this.updateDisplay();

    // Check if game is over
    if (this.currentRound >= this.maxRounds) {
      this.endGame();
    } else {
      this.currentRound++;
    }
  }

  endGame() {
    this.gameActive = false;

    let finalMessage = "";
    if (this.playerScore > this.computerScore) {
      finalMessage = `🏆 You Win! ${this.playerScore} - ${this.computerScore}`;
    } else if (this.computerScore > this.playerScore) {
      finalMessage = `🤖 Computer Wins! ${this.computerScore} - ${this.playerScore}`;
    } else {
      finalMessage = `🤝 It's a Draw! ${this.playerScore} - ${this.computerScore}`;
    }

    this.finalText.textContent = finalMessage;
    this.finalBox.classList.remove("hidden");
  }

  updateDisplay() {
    this.roundNumberDisplay.textContent = this.currentRound;
    this.playerScoreDisplay.textContent = this.playerScore;
    this.computerScoreDisplay.textContent = this.computerScore;
  }

  resetChoiceDisplays() {
    this.playerChoiceDisplay.textContent = "-";
    this.computerChoiceDisplay.textContent = "-";
    this.resultBox.classList.add("hidden");
  }
}

// Initialize the game when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new Game();
});
