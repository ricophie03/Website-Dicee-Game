function myFunction() {
  var randomNumber1 = Math.random() * 6;
  var randomNumber2 = Math.random() * 6;

  var a = Math.floor(randomNumber1) + 1;
  var b = Math.floor(randomNumber2) + 1;

  a;
  b;

  document.querySelector("div .img1").setAttribute("src", "images/dice" + a + ".png"); //dice1
  document.querySelector("div .img2").setAttribute("src", "images/dice" + b + ".png"); //dice2

  // Player 1 Win
  if (a > b) {
    document.querySelector(".container h1").textContent = "Player 1 Win!";
  }

  // Player 2 Win
  if (b > a) {
    document.querySelector(".container h1").textContent = "Player 2 Win!";
  }

  // Draw Dice Rsults
  if (b === a) {
    document.querySelector(".container h1").textContent = "Draw";
  }
}
