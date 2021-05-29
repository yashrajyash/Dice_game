let randomNumber1 = Math.floor(Math.random() * 6) + 1; //left dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1; //right dice

document.querySelector(".img1").setAttribute("src", "images/dice"+String(randomNumber1)+".png"); //left dice img
document.querySelector(".img2").setAttribute("src", "images/dice"+String(randomNumber2)+".png"); //right dice img

let title = document.getElementsByTagName("h1")[0];

if(randomNumber1 > randomNumber2) {
      title.innerHTML = "🚩 Player 1 wins!";
} else if(randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 wins! 🚩";
} else {
    title.innerText = "Draw!";
}
