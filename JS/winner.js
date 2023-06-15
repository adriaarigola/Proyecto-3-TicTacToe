// player winner
document.addEventListener("DOMContentLoaded", function () {
    const winner = sessionStorage.getItem("winner");
    const Player1 = sessionStorage.getItem("nombre1");
    const Player2 = sessionStorage.getItem("nombre2");

    const winnerPlayer = document.getElementById("winner-player");
    if (winner === "X") {
        winnerPlayer.textContent = `¡Gana ${Player1}!`;
    } else if (winner === "O") {
        winnerPlayer.textContent = `¡Gana ${Player2}!`;
    };
});