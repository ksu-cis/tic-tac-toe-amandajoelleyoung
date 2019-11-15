// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var dragging;
var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('dragstart', onDragStart);
    squares[i].addEventListener('dragend', onDragEnd);
    squares[i].addEventListener('dragleave', onDragleave);
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
}

function onDragStart(event) {
    dragging = {
        x: event.target.dataset.x,
        y: event.target.dataset.y
    }
    console.log(event);
}

function onDragEnd(event) {
    console.log(event);
}

function onDragLeave(event) {
    event.target.style.backgroundColor = null;
}

/*
var form = document.getElementById("board");
var cells = document.getElementsByClassName("cell");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener(event =>)
}
*/

/*
var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function checkForWin(){
    var cells = document.getElementsByClassName("square");
    //horizontal 3 in a row
    for (i = 0; i < 9; i += 3) {
        if (cells[i].innerText && cells[0 + i].innerText === cells[1 + i].innerText && cells.innerText[1 + i] === cells[2 + i].innerText) {
            setWinner(cells[0 + i]);
            return true;
        }
    }
    //vertical 3 in a row
    for (j = 0; j < 9; j += 3) {
        if (cells[j].innerText && cells[0 + j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[6 + j].innerText) {
            setWinner(cells[0 + j]);
            return true;
        }
    }
    //diagonal 3 in a row
    if (cells[0].innerText && cells[00].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[0]);
        return true;
    }
    if (cells[2].innerText && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText) {
        setWinner(cells[2]);
        return true;
    }

    return false;
}

function setWinner(winner) {
    turnElement.innerText = "Player " + turn + " wins!";
    
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        }
        else {
            turn = "x";
        }
        if (checkForWin()) {
            var cells = document.getElementsByClassName("square");
            for (i = 0; i < cells.length; i++) {
                cells[i].removeEventListener("click", onClick);
            }
        }
        else {
            setTurn();
        }
    }
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();
*/