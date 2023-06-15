const NAME_KEY = "gamekey";

function saveName() {
    const nombre1 = document.getElementById("Player_1").value;
    sessionStorage.setItem("nombre1", nombre1);

    const nombre2 = document.getElementById("Player_2").value;
    sessionStorage.setItem("nombre2", nombre2);
}

// function getName() {
//     const name_1 = sessionStorage.getItem("nombre1", name_1);
//     const name_2 = sessionStorage.getItem("nombre2", name_2);
// }