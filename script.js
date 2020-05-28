var scrore, roundscrore, activeplayer, gamestatus, winningScore;

init();

/*Roll the dice on click*/
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamestatus) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    var dice1DOM = document.getElementById("dice");
    var dice2DOM = document.getElementById("dice-1");

    dice1DOM.style.display = "block";
    dice2DOM.style.display = "block";

    dice1DOM.src = "/images/dice-" + dice1 + ".png";
    dice2DOM.src = "/images/dice-" + dice2 + ".png";

    console.log(dice1);
    console.log(dice2);

    if (dice1 !== 6 || dice2 !== 6) {
      roundscrore = dice1 + dice2;
      document.querySelector(
        "#current-score-" + activeplayer
      ).textContent = roundscrore;
    } else {
      score[activeplayer] = 0;
      document.querySelector("#player-score-" + activeplayer).textContent = "0";
      nextplayer();
    }
  } else {
    alert("Start a new game");
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  var input = document.querySelector(".final-score").value;
  if (input) {
    winningScore = input;
  } else {
    winningScore = 100;
  }
  if (gamestatus) {
    score[activeplayer] += roundscrore;

    document.getElementById("player-score-" + activeplayer).textContent =
      score[activeplayer];

    document.querySelector("#current-score-" + activeplayer).textContent = "0";
    if (score[activeplayer] >= winningScore) {
      document.querySelector("#player-" + activeplayer).textContent =
        "WINNER!!";
      document
        .querySelector(".player-panel-" + activeplayer)
        .classList.remove("active");
      document.querySelector("#player-" + activeplayer).classList.add("winner");
      gamestatus = false;
    } else {
      nextplayer();
    }
  } else {
    alert("Start a new game");
  }
});

function nextplayer() {
  activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);
  roundscrore = 0;

  document.getElementById("current-score-" + activeplayer).textContent = "0";

  document.querySelector(".player-panel-0").classList.toggle("active");
  document.querySelector(".player-panel-1").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  score = [0, 0];
  roundscrore = 0;
  activeplayer = 0;
  gamestatus = true;
  document.querySelector("#dice-1").style.display = "none";
  document.querySelector("#dice").style.display = "none";

  /*setting all score to 0*/
  document.getElementById("player-score-0").textContent = "0";
  document.getElementById("player-score-1").textContent = "0";
  document.getElementById("current-score-0").textContent = "0";
  document.getElementById("current-score-1").textContent = "0";
  document.getElementById("player-0").textContent = "Player 1";
  document.getElementById("player-1").textContent = "Player 2";
  document.querySelector("#player-0").classList.remove("winner");
  document.querySelector("#player-1").classList.remove("winner");
  document.querySelector(".player-panel-0").classList.remove("active");
  document.querySelector(".player-panel-1").classList.remove("active");
  document.querySelector(".player-panel-0").classList.add("active");
  document.querySelector(".player-panel-1").classList.remove("active");
}
