let buttons = document.querySelectorAll('.btn');
let reset = document.querySelector('#reset');
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgamebtn = document.querySelector("#new-btn");

let turn0 = true;

let winp = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

function resetgame() {
  turn0 = true;
  enablebox();
  msgcontainer.classList.add("hide")
}

buttons.forEach((box) => {
  box.addEventListener('click', () => {
    if (turn0) {
      box.innerText = 'o';
      turn0 = false
    }
    else {
      box.innerText = 'x';
      box.classList.add("box1")
      turn0 = true
    };
    box.disabled = true;
    check();
  })
});
function disablebox() {
  for (let box of buttons) {
    box.disabled = true;
  }
}
function enablebox() {
  for (let box of buttons) {
    box.disabled = false;
    box.innerText = "";
  }
}
function showwinner(winner) {
  msg.innerText = `Congratulation the winner is ${winner}`;
  msgcontainer.classList.remove("hide")
  disablebox();
}

function check() {
  for (let pattern of winp) {
    let pos1 = buttons[pattern[0]].innerText;
    let pos2 = buttons[pattern[1]].innerText;
    let pos3 = buttons[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showwinner(pos1)
      }
    }
  }
}
newgamebtn.addEventListener("click", resetgame)
reset.addEventListener("click", resetgame)