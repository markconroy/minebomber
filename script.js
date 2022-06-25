const targetsContainer = document.querySelector(".targets");
const fragment = document.createDocumentFragment();
const score = document.querySelector(".score");
let gameScore = parseInt(score.innerText);
let interval = Math.floor(Math.random() * 1000);
let targetsFilled = [];

function targets() {
  const targets = document.querySelectorAll(".targets__button");
  targets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      if (!target.classList.contains("targets__button--hit")) {
        gameScore = gameScore + 1;
        score.innerText = gameScore;
      }
      target.classList.add("targets__button--hit");
      setTimeout(() => {
        target.remove();
      }, 1000);
    });
  });
}

for (let i = 0; i < 100; i++) {
  const listItem = document.createElement("li");
  listItem.classList.add("targets__item");
  listItem.setAttribute("data-index", i);
  fragment.appendChild(listItem);
}
targetsContainer.appendChild(fragment);

const targetsItems = Array.from(document.querySelectorAll(".targets__item"));

function addItem() {
  let randomNumber = Math.floor(Math.random() * 100);
  const targetItem = targetsItems[randomNumber];
  const button = document.createElement("button");
  button.classList.add("targets__button");
  button.innerText = "💣";
  if (!targetItem.childNodes.length) {
    targetItem.appendChild(button);
  }
  interval = Math.floor(Math.random() * 1000);
  targetsFilled.push(randomNumber);
  targets();
  console.log(targetsFilled.sort());
}

function handleStartGame() {
  addItem();
  setInterval(() => {
    addItem();
  }, interval);
}

const startGame = document.querySelector(".start-game");
startGame.addEventListener("click", handleStartGame);
