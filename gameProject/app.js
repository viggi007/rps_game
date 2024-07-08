let userScore= 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const msg = document.querySelector("#msg");
const choices= document.querySelectorAll(".choice");
const genComputerChoice = () =>{
    const option = ["rock","paper","scissors"];
     const randIdx = Math.floor(Math.random() * 3);
     return option[randIdx];
    //rock, paper , scissor
};

const drawGame = () => {
   
    msg.innerText = " The Game was drawn";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `you win ! ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
    }
    else{
        compScore = compScore + 1;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
};

const playGame =(userChoice) =>{
     console.log("user choice", userChoice);
     const compChoice = genComputerChoice();
     console.log("comp choice", compChoice);
     if(userChoice === compChoice){
        drawGame();
     }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
   
        }else if(userChoice === "paper"){
            userWin= compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;     }
      showWinner(userWin ,userChoice, compChoice);
    }
     
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
    });
});