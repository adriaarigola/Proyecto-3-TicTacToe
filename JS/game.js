// Get players names from SessionStorage
document.addEventListener("DOMContentLoaded", function () {
    const nombre1 = sessionStorage.getItem("nombre1");
    const player1 = document.getElementById("Player1");
    player1.textContent = nombre1;

    const nombre2 = sessionStorage.getItem("nombre2");
    const player2 = document.getElementById("Player2");
    player2.textContent = nombre2;
});

// var
let currentPlayer = "X";
let turn = false;
const board = Array.from(document.querySelectorAll(".casilla"));

// estructure game
board.forEach((casilla) => {
    document.getElementById("Player1").style.backgroundColor = "red";
    casilla.addEventListener("click", (event) => {
        const casillaSeleccionada = event.target;
        if (casillaSeleccionada.innerHTML === "") {
            const imagen = document.createElement("img");
            imagen.classList.add("figuras");
            if (currentPlayer === "X") {
                document.getElementById("Player1").style.backgroundColor = "black";
                document.getElementById("Player2").style.backgroundColor = "red";
                imagen.src = "./img/piezas/xamarilla1.png";
            } else {
                document.getElementById("Player2").style.backgroundColor = "black";
                document.getElementById("Player1").style.backgroundColor = "red";
                imagen.src = "./img/piezas/oazul1.png";
            }
            casillaSeleccionada.appendChild(imagen);

            if (checkWinner()) {
                sessionStorage.setItem("winner", currentPlayer);
                setTimeout(pageWinner, 1000);
            } else if (checkDraw()) {
                setTimeout(pageDraw, 1000);
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
});

// check turn player
// const checkTurn = () => {
//     if (currentPlayer === "X") {
//         let player1Element = document.getElementById("Player1");
//         player1Element.style.backgroundColor = "red";
//     } else {
//         let player2Element = document.getElementById("Player2");
//         player2Element.style.backgroundColor = "red";
//     }
// }


// check winner
const checkWinner = () => {
    const CombinationWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return CombinationWin.some(combination => {
        const [a, b, c] = combination;
        return (
            board[a].innerHTML.includes('xamarilla1.png') &&
            board[b].innerHTML.includes('xamarilla1.png') &&
            board[c].innerHTML.includes('xamarilla1.png')
        ) || (
                board[a].innerHTML.includes('oazul1.png') &&
                board[b].innerHTML.includes('oazul1.png') &&
                board[c].innerHTML.includes('oazul1.png')
            );
    });
};


// function draw
const checkDraw = () => {
    return board.every(casilla => casilla.innerHTML !== "");
};

// page winners
const pageWinner = () => {
    window.location.href = "ganador.html";
};

// page draw
const pageDraw = () => {
    window.location.href = "empate.html";
};
