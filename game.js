const input = document.getElementById("guessInput");
const button = document.getElementById("inputButton");
const players = [
  "TWEEK",
  "SNOGI",
  "A9",
  "SPIRO",
  "NOODL",
  "HOO D. NII",
  "VINCE",
  "XAVIER",
  "ARYEH",
  "SAUCE",
  "DYLA",
  "LITTLEMACMAIN",
  "HUGG1ES",
  "ZBOSGAMING",
  "EO",
  "GREY",
  "HAM BURRITO",
  "SICKLE",
  "VAMPIRE",
  "TRANSGENDER GANDHI",
  "MEGNA",
  "TJ13",
  "CHOCOLATE JESUS",
  "MR M",
  "AUSTI",
  "PLAYMAKER",
  "$KRILLDOG$",
  "EX0",
  "GGECKO",
  "PSYCHICBOY",
  "GAJASA",
  "DIZZY",
  "DONOXED",
  "SLANDEROUS",
  "POP",
  "RAYNBOW",
  "ANTONIO",
  "KENDRIIN",
  "DDDEEZ",
  "TAMAN",
  "CHAN",
  "KVNG",
  "CROWDINGMOVIE",
  "BOOSK",
  "CROWE",
  "GOATEATER",
  "MCHEESE",
  "DAVEMAN9165",
  "DAK",
  "CONSENT",
];

function makeGrid(rows, cols) {
  const container = document.getElementById("grid-container");
  container.style.setProperty("--columns", cols);
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div"); // Create a new 'square'
    cell.classList.add("grid-item"); // Give it its CSS 'uniform'

    container.appendChild(cell); // Stick it in the container
  }
}

makeGrid(10, 5);

let squareCounter = 0;

function buttonPush() {
  const squares = document.querySelectorAll(".grid-item");
  const val = input.value.toUpperCase();

  if (players.includes(val)) {
    if (squareCounter < squares.length) {
      squares[squareCounter].classList.add("correct");
      squares[squareCounter].textContent = val;
      squareCounter++;
      input.value = "";
      const index = players.indexOf(val);
      players.splice(index, 1);
    }
  } else if (val === "HEROBRINE") {
    alert("Herobrine");
  } else if (val === "EASTER EGG") {
    window.location.href =
      "https://www.youtube.com/watch?v=QDia3e12czcautoplay=1";
  } else {
    alert("Player Already guessed or is not a player.")

  }
}

// This goes outside the function
button.addEventListener("click", buttonPush);

// 2. The Enter Key (The addition)
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    buttonPush();
  }
});
