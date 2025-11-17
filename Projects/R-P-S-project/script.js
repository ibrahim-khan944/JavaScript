let userscore = 0;
let computerscore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
let userscorepara = document.querySelector("#you-score")
let compscorepara = document.querySelector("#comp-score")

let gencopmchoice = () => {
  let options = ["rock", "paper", "scissors"]
  let ranidx = Math.floor(Math.random() * 3);
  return options[ranidx]
}

const Drawgame = () => {
   msg.innerText = "Draw play again"
   msg.style.backgroundColor = "#081b31"
}

const showwinner = (userwin,userchoice,compchoice)=>{
  if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win! your ${userchoice} beats ${compchoice}`
    msg.style.backgroundColor = "green"
  }else{
    computerscore++;
    compscorepara.innerText = computerscore;
    msg.innerText = `You Win ${compchoice} beats your ${userchoice}`
    msg.style.backgroundColor = "red"
  }
  
}

function playgame(userchoice) {

  const compchoice = gencopmchoice();
  if (userchoice === compchoice) {
    Drawgame()
  }
  else {
    let userwin = true ;
    if(userchoice === "rock"){
      //  scissors , paper
       userwin = compchoice === "paper" ? false : true
    }
    else if(userchoice === "paper"){
     userwin = compchoice === "scissors" ? false : true
    }
    else{
      //  rock , paper
     userwin = compchoice === "scissors" ? false : true
    }
    showwinner(userwin,userchoice,compchoice);
  }

}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id")
    playgame(userchoice)
  })
})