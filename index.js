function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const emojis = { rock: "✊", paper: "✋", scissors: "✌️" };
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = `It's a tie! Both chose ${emojis[playerChoice]}.`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${emojis[playerChoice]} beats ${emojis[computerChoice]}.`;
  } else {
    result = `You lose! ${emojis[computerChoice]} beats ${emojis[playerChoice]}.`;
  }

  updateUI(result);
}

function updateUI(message) {
  document.getElementById("result").textContent = message;
}
