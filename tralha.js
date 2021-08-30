let player, winner = null;

function pickBox(id) {
    let box = document.getElementById(id); 

    if (box.innerHTML !== '-') { /* condiçao para nao jogar encima do valor */
        return;
    }

    box.innerHTML = player;
    box.style.color = '#000';

    if(player === 'X') {
        player = 'O';
    }else if (player === 'O'){
        player = 'X';
    }

    switchPlayer(player);
    checkWinner();
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

    if ( checkOrder(box1, box2, box3)) {
        colorChange(box1, box2, box3);
        changeWinner(box1)
        return
    }

    if ( checkOrder(box4, box5, box6)) {
        colorChange(box4, box5, box6);
        changeWinner(box4)
        return
    }

    if ( checkOrder(box7, box8, box9)) {
        colorChange(box7, box8, box9);
        changeWinner(box7)
        return
    }

    if ( checkOrder(box1, box4, box7)) {
        colorChange(box1, box4, box7);
        changeWinner(box1)
        return
    }
}

function checkOrder(checkBox1, checkBox2, checkBox3) {
    let order = false;

    if (checkBox1.innerHTML !== '-' && checkBox1.innerHTML === checkBox2.innerHTML && checkBox2.innerHTML === checkBox3.innerHTML) {
        order = true;
    }

    return order;
}

function colorChange(box1, box2, box3) {
    box1.style.background = '#0f0';
    box2.style.background = '#0f0';
    box3.style.background = '#0f0';
}

function changeWinner(box) {
    let selectedWinner = document.getElementById('selectedWinner');
    winner = box.innerHTML;
    selectedWinner.innerHTML = winner;
}