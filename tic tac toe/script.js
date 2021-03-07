const square = document.getElementsByClassName("boardsquare")
const button = document.querySelectorAll("button")

let xOrO = 0; //  0 put X, 1 put O

for(let i = 0; i < square.length; i++) {
		const playGame = () => {
			if (square[i].innerHTML == "") {
				if (xOrO === 0) {
					square[i].innerHTML = "<p>X</p>"
					checkWin()
					equality()
					return xOrO = 1;
				}
				if (xOrO === 1) {
					square[i].innerHTML = "<p>O</p>"
					checkWin()
					equality()
					return xOrO = 0;
				}
			}	
			
		}


square[i].addEventListener("click", playGame)

const checkWin = () => {
	if (square[0].innerHTML === "<p>X</p>" &&
	    square[1].innerHTML === "<p>X</p>" &&
	    square[2].innerHTML === "<p>X</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("xwinboard").style.display = "flex"}
	if (square[3].innerHTML === "<p>X</p>" &&
	    square[4].innerHTML === "<p>X</p>" &&
	    square[5].innerHTML === "<p>X</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("xwinboard").style.display = "flex"}
	if (square[6].innerHTML === "<p>X</p>" &&
	    square[7].innerHTML === "<p>X</p>" &&
	    square[8].innerHTML === "<p>X</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("xwinboard").style.display = "flex"}
	if (square[0].innerHTML === "<p>X</p>" &&
	    square[3].innerHTML === "<p>X</p>" &&
	    square[6].innerHTML === "<p>X</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("xwinboard").style.display = "flex"}
	if (square[1].innerHTML === "<p>X</p>" &&
	    square[4].innerHTML === "<p>X</p>" &&
	    square[7].innerHTML === "<p>X</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("xwinboard").style.display = "flex"}
	if (square[2].innerHTML === "<p>X</p>" &&
	    square[5].innerHTML === "<p>X</p>" &&
	    square[8].innerHTML === "<p>X</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("xwinboard").style.display = "flex"}
	if (square[0].innerHTML === "<p>X</p>" &&
	    square[4].innerHTML === "<p>X</p>" &&
	    square[8].innerHTML === "<p>X</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("xwinboard").style.display = "flex"}
	if (square[2].innerHTML === "<p>X</p>" &&
	    square[4].innerHTML === "<p>X</p>" &&
	    square[6].innerHTML === "<p>X</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("xwinboard").style.display = "flex"}
	if (square[0].innerHTML === "<p>O</p>" &&
	    square[1].innerHTML === "<p>O</p>" &&
	    square[2].innerHTML === "<p>O</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("owinboard").style.display = "flex"}
	if (square[3].innerHTML === "<p>O</p>" &&
	    square[4].innerHTML === "<p>O</p>" &&
	    square[5].innerHTML === "<p>O</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("owinboard").style.display = "flex"}
	if (square[6].innerHTML === "<p>O</p>" &&
	    square[7].innerHTML === "<p>O</p>" &&
	    square[8].innerHTML === "<p>O</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("owinboard").style.display = "flex"}
	if (square[0].innerHTML === "<p>O</p>" &&
	    square[3].innerHTML === "<p>O</p>" &&
	    square[6].innerHTML === "<p>O</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("owinboard").style.display = "flex"}
	if (square[1].innerHTML === "<p>O</p>" &&
	    square[4].innerHTML === "<p>O</p>" &&
	    square[7].innerHTML === "<p>O</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("owinboard").style.display = "flex"}
	if (square[2].innerHTML === "<p>O</p>" &&
	    square[5].innerHTML === "<p>O</p>" &&
	    square[8].innerHTML === "<p>O</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("owinboard").style.display = "flex"}
	if (square[0].innerHTML === "<p>O</p>" &&
	    square[4].innerHTML === "<p>O</p>" &&
	    square[8].innerHTML === "<p>O</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("owinboard").style.display = "flex"}
	if (square[2].innerHTML === "<p>O</p>" &&
	    square[4].innerHTML === "<p>O</p>" &&
	    square[6].innerHTML === "<p>O</p>") {
		document.getElementById("boardgame").style.display = "none";
		document.getElementById("owinboard").style.display = "flex"}
}


const equality = () => {
	if(square[0].innerHTML !== "" &&
	square[1].innerHTML !== "" &&
	square[2].innerHTML !== "" &&
	square[3].innerHTML !== "" &&
	square[4].innerHTML !== "" &&
	square[5].innerHTML !== "" &&
	square[6].innerHTML !== "" &&
	square[7].innerHTML !== "" &&
	square[8].innerHTML !== "") {
		document.getElementById("boardgame").style.display = "none"
		document.getElementById("drawboard").style.display = "flex"
	}
}
const playAgain = () => {
	document.getElementById("drawboard").style.display = "none"
	document.getElementById("owinboard").style.display = "none"
	document.getElementById("xwinboard").style.display = "none"
	document.getElementById("boardgame").style.display = "grid"
	square[i].innerHTML = "";
	return xOrO = 0;
}
button.forEach(button => button.addEventListener("click", () => playAgain()));
}


