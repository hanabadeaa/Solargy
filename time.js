let countdownValue = 20; 
let timerInterval;

function startGame() {
    timerInterval = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    countdownValue--;
  
    document.getElementById("countdown").textContent = countdownValue;
  
    if (countdownValue <= 0) {
      endGame();
    }
  }

  function endGame() {
    clearInterval(timerInterval); // Stop the timer
    // Display a message or redirect to another page
    window.location.href = "https://solargyargame.web.app/game-over.html";
  }
