const n = document.querySelector(".n");
const k = document.querySelector(".k");
const p = document.querySelector(".p");
const result = document.querySelector(".result");
const Win = document.querySelector(".Win");
const Los = document.querySelector(".Los");
const not = document.querySelector(".not");

const compA = ["scissors", "rock", "paper"];

let nothing = 0;
let user = 0;
let comp = 0;

n.addEventListener("click", Scissors);
k.addEventListener("click", Rock);
p.addEventListener("click", Paper);

function Scissors() {
  const user1 = "scissors";
  const compLet = Lets();
  const scissorsR = user > compA;
  console.log(compLet);
  if (user1 === compLet) {
    nothing = nothing + 1;
    not.textContent = nothing;
  } else if (compLet === "paper") {
    user = user + 1;
    Win.textContent = user;
  } else {
    comp = comp + 1;
    Los.textContent = comp;
  }
}

function Rock() {
  const user1 = "rock";
  const compLet = Lets();
  console.log(compLet);
  if (user1 === compLet) {
    nothing = nothing + 1;
    not.textContent = nothing;
  } else if (compLet === "scissors") {
    user = user + 1;
    Win.textContent = user;
  } else {
    comp = comp + 1;
    Los.textContent = comp;
  }
}

function Paper() {
  const user1 = "paper";
  const compLet = Lets();
  if (user1 === compLet) {
    nothing = nothing + 1;
    not.textContent = nothing;
  } else if (compLet === "rock") {
    user = user + 1;
    Win.textContent = user;
  } else {
    comp = comp + 1;
    Los.textContent = comp;
  }
}
function Lets() {
  let compLet = compA[Math.floor(Math.random() * compA.length)];
  result.textContent = compLet;
  return compLet;
}

console.log();
