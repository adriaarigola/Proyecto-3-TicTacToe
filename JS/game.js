// obtener nombres jugadores from SessionStorage
// let player1 = document.getElementById("Player1");
// player1.innerHTML = sessionStorage.getItem("Name player 1");

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

// estructura juego
board.forEach((casilla) => {
    casilla.addEventListener("click", (event) => {
        const casillaSeleccionada = event.target;

        if (casillaSeleccionada.innerHTML === "" && !turn) {
            const imagen = document.createElement("img");
            imagen.classList.add("figuras");
            if (currentPlayer === "X") {
                imagen.src = "./img/piezas/xamarilla1.png";
            } else {
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

// comrpobar ganador
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


// funcion empate
const checkDraw = () => {
    return board.every(casilla => casilla.innerHTML !== "");
};

// redirigir dependiendo ganadores
const pageWinner = () => {
    window.location.href = "ganador.html";
};

const pageDraw = () => {
    window.location.href = "empate.html";
};


// // funcion reset tablero
// const resetBoard = () => {
//     board.forEach(casilla => {
//         casilla.innerHTML = "";
//     });
//     currentPlayer = "X";
//     turn = false;
// };
