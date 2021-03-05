const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const youChoose = document.getElementById("yourchoose");
const computerChoose = document.getElementById("computerschoose");
let computerScore = document.getElementById("computerscore").textNode;
let yourScore = document.getElementById("yourscore").textNode;
let playAgain = document.getElementById("playagain");
const resetScore = document.getElementById("resetscore");

computerScore = 0;
document.getElementById("computerscore").innerHTML = computerScore;
yourScore = 0;
document.getElementById("yourscore").innerHTML = yourScore;
let pWinLost = document.createElement("p");

const allChoose = [
  '<img src="./images/icon-rock.svg" alt="Rock">',
  '<img src="./images/icon-paper.svg" alt="Paper">',
  '<img src="./images/icon-scissors.svg" alt="Scissors">',
];
let playerChose;
let computerChose;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rockChose = () => {
  playerChose = allChoose[0];
  computerChose = allChoose[randomIntFromInterval(0, 2)];
  document.getElementById("yourchoose").innerHTML =
    '<img src="./images/icon-rock.svg" alt="Rock">';
  document.getElementById("computerschoose").innerHTML =
    allChoose[randomIntFromInterval(0, 2)];

  if (document.getElementById("computerschoose").innerHTML === allChoose[1]) {
    computerScore++;
    document.getElementById("computerscore").innerHTML = computerScore;
    document.getElementById("theboardgame").style.display = "none";
    document.getElementById("theresult").style.display = "grid";
    pWinLost.innerHTML = "You Lost!";
    pWinLost.style =
      "padding-top: 50px; text-align: center; font-family: sans-serif; font-size: 20px";
    document.getElementById("theresult").appendChild(pWinLost);
  }

  if (document.getElementById("computerschoose").innerHTML === allChoose[2]) {
    yourScore++;
    document.getElementById("yourscore").innerHTML = yourScore;
    document.getElementById("theboardgame").style.display = "none";
    document.getElementById("theresult").style.display = "grid";
    pWinLost.innerHTML = "You Win!";
    pWinLost.style =
      "padding-top: 50px; text-align: center; font-family: sans-serif; font-size: 20px";
    document.getElementById("theresult").appendChild(pWinLost);
  }

  if (document.getElementById("computerschoose").innerHTML === allChoose[0]) {
    document.getElementById("theboardgame").style.display = "none";
    document.getElementById("theresult").style.display = "grid";
    pWinLost.innerHTML = "Draw!";
    pWinLost.style =
      "padding-top: 50px; text-align: center; font-family: sans-serif; font-size: 20px";
    document.getElementById("theresult").appendChild(pWinLost);
  }
};

const paperChose = () => {
  playerChose = allChoose[1];
  computerChose = allChoose[randomIntFromInterval(0, 2)];
  document.getElementById("yourchoose").innerHTML =
    '<img src="./images/icon-paper.svg" alt="Paper">';
  document.getElementById("computerschoose").innerHTML =
    allChoose[randomIntFromInterval(0, 2)];

  if (document.getElementById("computerschoose").innerHTML === allChoose[2]) {
    computerScore++;
    document.getElementById("computerscore").innerHTML = computerScore;
    document.getElementById("theboardgame").style.display = "none";
    document.getElementById("theresult").style.display = "grid";
    pWinLost.innerHTML = "You Lost!";
    pWinLost.style =
      "padding-top: 50px; text-align: center; font-family: sans-serif; font-size: 20px";
    document.getElementById("theresult").appendChild(pWinLost);
  }

  if (document.getElementById("computerschoose").innerHTML === allChoose[0]) {
    yourScore++;
    document.getElementById("yourscore").innerHTML = yourScore;
    document.getElementById("theboardgame").style.display = "none";
    document.getElementById("theresult").style.display = "grid";
    pWinLost.innerHTML = "You Win!";
    pWinLost.style =
      "padding-top: 50px; text-align: center; font-family: sans-serif; font-size: 20px";
    document.getElementById("theresult").appendChild(pWinLost);
  }

  if (document.getElementById("computerschoose").innerHTML === allChoose[1]) {
    document.getElementById("theboardgame").style.display = "none";
    document.getElementById("theresult").style.display = "grid";
    pWinLost.innerHTML = "Draw!";
    pWinLost.style =
      "padding-top: 50px; text-align: center; font-family: sans-serif; font-size: 20px";
    document.getElementById("theresult").appendChild(pWinLost);
  }
};

const scissorsChose = () => {
  playerChose = allChoose[2];
  computerChose = allChoose[randomIntFromInterval(0, 2)];
  document.getElementById("yourchoose").innerHTML =
    '<img src="./images/icon-scissors.svg" alt="Scissors">';
  document.getElementById("computerschoose").innerHTML =
    allChoose[randomIntFromInterval(0, 2)];

  if (document.getElementById("computerschoose").innerHTML === allChoose[0]) {
    computerScore++;
    document.getElementById("computerscore").innerHTML = computerScore;
    document.getElementById("theboardgame").style.display = "none";
    document.getElementById("theresult").style.display = "grid";
    pWinLost.innerHTML = "You Lost!";
    pWinLost.style =
      "padding-top: 50px; text-align: center; font-family: sans-serif; font-size: 20px";
    document.getElementById("theresult").appendChild(pWinLost);
  }

  if (document.getElementById("computerschoose").innerHTML === allChoose[1]) {
    yourScore++;
    document.getElementById("yourscore").innerHTML = yourScore;
    document.getElementById("theboardgame").style.display = "none";
    document.getElementById("theresult").style.display = "grid";
    pWinLost.innerHTML = "You Win!";
    pWinLost.style =
      "padding-top: 50px; text-align: center; font-family: sans-serif; font-size: 20px";
    document.getElementById("theresult").appendChild(pWinLost);
  }

  if (document.getElementById("computerschoose").innerHTML === allChoose[2]) {
    document.getElementById("theboardgame").style.display = "none";
    document.getElementById("theresult").style.display = "grid";
    pWinLost.innerHTML = "Draw!";
    pWinLost.style =
      "padding-top: 50px; text-align: center; font-family: sans-serif; font-size: 20px";
    document.getElementById("theresult").appendChild(pWinLost);
  }
};

const playAgainFunc = () => {
  document.getElementById("theresult").style.display = "none";
  document.getElementById("theboardgame").style.display = "grid";
};

const setScoreZero = () => {
  computerScore = 0;
  yourScore = 0;
  document.getElementById("computerscore").innerHTML = computerScore;
  document.getElementById("yourscore").innerHTML = yourScore;
};

rock.addEventListener("click", () => rockChose());
paper.addEventListener("click", () => paperChose());
scissors.addEventListener("click", () => scissorsChose());
playAgain.addEventListener("click", () => playAgainFunc());
resetScore.addEventListener("click", () => setScoreZero());
