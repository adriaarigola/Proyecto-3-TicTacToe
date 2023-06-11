const casillas = document.getElementsByClassName("casilla");
let turn = false;


// Obtiene el nombre del jugador almacenado en sessionStorage
let playerName = sessionStorage.getItem("Player1");

// Actualiza el contenido del elemento HTML con el nombre del jugador
document.getElementById("Player1").textContent = playerName;


// Variables
let currentPlayer = "X";
let gameEnded = false;
const board = Array.from(document.querySelectorAll(".casilla"));

// Event Listeners
board.forEach((casilla) => {
    casilla.addEventListener("click", (event) => {
        const casillaSeleccionada = event.target;
        const casillaId = casillaSeleccionada.id;

        if (casillaSeleccionada.innerText === "" && !gameEnded) {
            casillaSeleccionada.innerText = currentPlayer;
            casillaSeleccionada.classList.add(currentPlayer);

            if (checkWin()) {
                endGame(false);
            } else if (checkDraw()) {
                endGame(true);
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
});

// Functions
const checkWin = () => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
            board[a].innerText === currentPlayer &&
            board[b].innerText === currentPlayer &&
            board[c].innerText === currentPlayer
        );
    });
};

const checkDraw = () => {
    return board.every(casilla => casilla.innerText !== "");
};

const endGame = (draw) => {
    gameEnded = true;
    const message = draw ? "¡Empate!" : `¡${currentPlayer} ha ganado!`;
    alert(message);
    resetBoard();
};

const resetBoard = () => {
    board.forEach(casilla => {
        casilla.innerText = "";
        casilla.classList.remove("X", "O");
    });
    currentPlayer = "X";
    gameEnded = false;
};