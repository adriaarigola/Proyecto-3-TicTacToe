const savePlayers = () => {
    let userName_1 = document.getElementById("Player_1");
    let Player_1 = userName_1.value;
    console.log(Player_1);
    sessionStorage.setItem("Name player 1", Player_1);

    let NamePlayer2 = document.getElementById("Player_2");
    let Player_2 = NamePlayer2.value;
    console.log(Player_2);
    sessionStorage.setItem("Name player 2", Player_2);
};