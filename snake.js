var gameArea = document.querySelector(".gra");
var wynikDisplay = document.querySelector(".wynik");
var bestWynikDisplay = document.querySelector(".bestwynik");
var koniec = false;
var wynik = 0;
var foodX;
var foodY;
var playerX = 5;
var playerY = 10;
var playerBody = [];
var moveX = 0;
var moveY = 0;
var setIntervalId;
var bestWynik = localStorage.getItem("bestwynik") || 0;
bestWynikDisplay.innerText = "Najlepszy wynik: ".concat(bestWynik);
var changeFoodPos = function () {
    foodX = Math.floor(Math.random() * 20) + 1;
    foodY = Math.floor(Math.random() * 20) + 1;
};
var koniecGry = function () {
    clearInterval(setIntervalId);
    alert("Koniec Gry! Kliknij OK aby zagrać ponownie");
    location.reload();
};
var changeDirection = function (e) {
    if (e.key === "ArrowUp" && moveY != 1) {
        moveX = 0;
        moveY = -1;
    }
    else if (e.key === "ArrowDown" && moveY != -1) {
        moveX = 0;
        moveY = 1;
    }
    else if (e.key === "ArrowLeft" && moveX != 1) {
        moveX = -1;
        moveY = 0;
    }
    else if (e.key === "ArrowRight" && moveX != -1) {
        moveX = 1;
        moveY = 0;
    }
    startGry();
};
var startGry = function () {
    if (koniec)
        return koniecGry();
    var htmlAdd = "<div class=\"food\" style=\"grid-area: ".concat(foodY, " / ").concat(foodX, "\"></div>");
    if (playerX === foodX && playerY === foodY) {
        changeFoodPos();
        playerBody.push([foodX, foodY]);
        wynik++;
        bestWynik = wynik >= bestWynik ? wynik : bestWynik;
        localStorage.setItem("bestwynik", bestWynik);
        wynikDisplay.innerText = "Wynik: ".concat(wynik);
        bestWynikDisplay.innerText = "Najlepszy wynik: ".concat(bestWynik);
    }
    for (var i = playerBody.length - 1; i > 0; i--) {
        playerBody[i] = playerBody[i - 1];
    }
    playerBody[0] = [playerX, playerY];
    playerX += moveX;
    playerY += moveY;
    if (playerX <= 0 || playerX > 20 || playerY <= 0 || playerY > 20) {
        koniec = true;
    }
    for (var i = 0; i < playerBody.length; i++) {
        htmlAdd += "<div class=\"player\" style=\"grid-area: ".concat(playerBody[i][1], " / ").concat(playerBody[i][0], "\"></div>");
        if (i !== 0 && playerBody[0][1] === playerBody[i][1] && playerBody[0][0] === playerBody[i][0]) {
            koniec = true;
        }
    }
    gameArea.innerHTML = htmlAdd;
};
changeFoodPos();
setIntervalId = setInterval(startGry, 125);
document.addEventListener("keydown", changeDirection);
