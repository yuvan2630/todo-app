let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function play(index) {

    if (board[index] !== "" || gameOver) {
        return;
    }

    board[index] = currentPlayer;

    document.getElementsByClassName("cell")[index].innerHTML =
        currentPlayer;

    if (checkWinner()) {
        document.getElementById("status").innerHTML =
            "Player " + currentPlayer + " Wins!";
        gameOver = true;
        return;
    }

    if (board.every(cell => cell !== "")) {
        document.getElementById("status").innerHTML =
            "It's a Draw!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    document.getElementById("status").innerHTML =
        "Player " + currentPlayer + " Turn";
}

function checkWinner() {

    for (let pattern of winPatterns) {

        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return true;
        }
    }

    return false;
}

function restartGame() {

    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    currentPlayer = "X";

    let cells = document.getElementsByClassName("cell");

    for (let cell of cells) {
        cell.innerHTML = "";
    }

    document.getElementById("status").innerHTML =
        "Player X Turn";
}