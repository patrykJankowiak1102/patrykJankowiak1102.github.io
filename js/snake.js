const gameArea = document.querySelector(".gra");
const wynikDisplay = document.querySelector(".wynik");
const bestWynikDisplay = document.querySelector(".bestwynik");

let koniec = false, wynik = 0;
let foodX, foodY;
let playerX = 5, playerY = 10, playerBody = [];
let moveX = 0, moveY = 0;
let setIntervalId;
let bestWynik = localStorage.getItem("bestwynik") || 0;

bestWynikDisplay.innerText = `Najlepszy wynik: ${bestWynik}`;

const changeFoodPos = () => {
    foodX = Math.floor(Math.random() * 20) + 1;
    foodY = Math.floor(Math.random() * 20) + 1;
}

const koniecGry = () => {
    clearInterval(setIntervalId);
    alert("Koniec Gry! Kliknij OK aby zagrać ponownie");
    location.reload();
}

const changeDirection = (e) => {
    if (e.key === "ArrowUp" && moveY != 1) {
        moveX = 0;
        moveY = -1;
    } else if (e.key === "ArrowDown" && moveY != -1) {
        moveX = 0;
        moveY = 1;
    } else if (e.key === "ArrowLeft" && moveX != 1) {
        moveX = -1;
        moveY = 0;
    } else if (e.key === "ArrowRight" && moveX != -1) {
        moveX = 1;
        moveY = 0;
    }
    startGry();
}

const startGry = () => {
    if (koniec) return koniecGry();

    let htmlAdd = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if (playerX === foodX && playerY === foodY) {
        changeFoodPos();
        playerBody.push([foodX, foodY]);
        wynik++;

        bestWynik = wynik >= bestWynik ? wynik : bestWynik;
        localStorage.setItem("bestwynik", bestWynik);
        wynikDisplay.innerText = `Wynik: ${wynik}`;
        bestWynikDisplay.innerText = `Najlepszy wynik: ${bestWynik}`;
    }

    for (let i = playerBody.length - 1; i > 0; i--) {
        playerBody[i] = playerBody[i - 1];
    }

    playerBody[0] = [playerX, playerY];

    playerX += moveX;
    playerY += moveY;

    if (playerX <= 0 || playerX > 20 || playerY <= 0 || playerY > 20) {
        koniec = true;
    }

    for (let i = 0; i < playerBody.length; i++) {
        htmlAdd += `<div class="player" style="grid-area: ${playerBody[i][1]} / ${playerBody[i][0]}"></div>`;
        if (i !== 0 && playerBody[0][1] === playerBody[i][1] && playerBody[0][0] === playerBody[i][0]) {
            koniec = true;
        }
    }

    gameArea.innerHTML = htmlAdd;
}

changeFoodPos();
setIntervalId = setInterval(startGry, 125);
document.addEventListener("keydown", changeDirection);