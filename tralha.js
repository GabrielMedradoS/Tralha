let player = null;

function pickBox(id) {
    let box = document.getElementById(id); 

    box.innerHTML = player;
    box.style.color = '#000';

    if (box.innerHTML !== '-') { /* condiçao para nao jogar encima do valor */
        return;
    }

    if(player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    switchPlayer(player);
}

function switchPlayer(valor) {
    let selectedPlayer = document.getElementById('selectedPlayer');

    player = valor;
    selectedPlayer.innerHTML = player;
}

switchPlayer('X');

function checkWinner() {
    let boxes = document.getElementsByClassName('box');

    let box1 = document.getElementById(1);
    let box2 = document.getElementById(2);
    let box3 = document.getElementById(3);
    let box4 = document.getElementById(4);
    let box5 = document.getElementById(5);
    let box6 = document.getElementById(6);
    let box7 = document.getElementById(7);
    let box8 = document.getElementById(8);
    let box9 = document.getElementById(9);
}

function checkOrder(box1, box2, box3) {
    let order = false;


}