let player, winner = null;

function pickBox(id) {
    let box = document.getElementById(id);
    
    if (winner !== null) { /* Caso ganhe, nao mude os outros quadrados */
        return;
    }

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

    let box1 = document.getElementById(1);
    let box2 = document.getElementById(2);
    let box3 = document.getElementById(3);
    let box4 = document.getElementById(4);
    let box5 = document.getElementById(5);
    let box6 = document.getElementById(6);
    let box7 = document.getElementById(7);
    let box8 = document.getElementById(8);
    let box9 = document.getElementById(9);

    /**** HORIZONTAL ******************************/
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
    /*** VERTICAL **********************************/
    if ( checkOrder(box1, box4, box7)) {
        colorChange(box1, box4, box7);
        changeWinner(box1)
        return
    }

    if ( checkOrder(box2, box5, box8)) {
        colorChange(box2, box5, box8);
        changeWinner(box2)
        return
    }

    if ( checkOrder(box3, box6, box9)) {
        colorChange(box3, box6, box9);
        changeWinner(box3)
        return
    }

    /*** DIAGONAL **********************************/
    if ( checkOrder(box1, box5, box9)) {
        colorChange(box1, box5, box9);
        changeWinner(box1)
        return
    }
    if ( checkOrder(box3, box5, box7)) {
        colorChange(box3, box5, box7);
        changeWinner(box3)
        return
    }
}

function checkOrder(checkBox1, checkBox2, checkBox3) {
    let order = false;

    (checkBox1.innerHTML !== '-' && checkBox1.innerHTML === checkBox2.innerHTML && checkBox2.innerHTML === checkBox3.innerHTML ? order = true : order = false)

    return order;
}

function colorChange(checkBox1, checkBox2, checkBox3) {
    checkBox1.style.background = '#0f0';
    checkBox2.style.background = '#0f0';
    checkBox3.style.background = '#0f0';
}

function changeWinner(box) {
    let selectedWinner = document.getElementById('selectedWinner');
    winner = box.innerHTML;
    selectedWinner.innerHTML = winner;
}

function restart() {
    let boxes = document.querySelectorAll('.box');

    winner = null;
    selectedWinner.innerHTML = '';

    boxes.forEach(box => {
        box.style.background = '#eee';
        box.style.color = '#eee';
        box.innerHTML = '-';
    });

    switchPlayer('X');
}