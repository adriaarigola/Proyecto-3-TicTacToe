// let userName_1 = document.getElementById("Player_1");
// let Player_1 = userName_1.value;
// console.log(Player_1);
// sessionStorage.setItem("Name player 1", Player_1);

function guardarNombre() {
    const nombre1 = document.getElementById("Player_1").value;
    sessionStorage.setItem("nombre1", nombre1);

    const nombre2 = document.getElementById("Player_2").value;
    sessionStorage.setItem("nombre2", nombre2);
}