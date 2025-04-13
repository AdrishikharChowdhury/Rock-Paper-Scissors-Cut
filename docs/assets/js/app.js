console.log("app.js is running");

let toggleBtn=document.querySelector("#heading");
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg-container");
let msg1=document.querySelector("#msg");
const score1=document.querySelector(".user-score");
const score2=document.querySelector(".comp-score");
let reset=document.querySelector("#reset")

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    score1.innerText = "0";
    score2.innerText = "0";
    msg.innerText = "Play your Move";
    msg.classList.remove("win");
    msg.classList.remove("lose");
    msg.classList.add("default-msg");
})

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        let result = playGame(userChoice);

        if (result === null) {
            return; // Exit function if it's a draw
        } else if (result) {
            win();
        } else {
            lose();
        }
    });
});

const win=()=>{
    userScore+=1;
    score1.innerText=`${userScore}`;
    msg.innerText="Congrats. You Won";
    msg.classList.add("win");
    msg.classList.remove("lose");
}

const lose=()=>{
    compScore+=1;
    score2.innerText=`${compScore}`;
    msg.innerText="You Lose";
    msg.classList.add("lose");
    msg.classList.remove("win");
}

const highlightCompChoice = (compChoice) => {
    document.querySelectorAll(".choice").forEach(choice => {
        choice.classList.remove("comp-selected");
    })
    document.querySelector(`#${compChoice}`).classList.add("comp-selected");
    setTimeout(() => {
        document.querySelector(`#${compChoice}`).classList.remove("comp-selected");
    }, 1000);
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    highlightCompChoice(compChoice);
    if (userChoice == compChoice) {
        drawGame();
        return null;
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        return userWin;
    }
};

const drawGame = () => {
    msg.innerText = "The Game is a Draw";
    msg.classList.remove("win");
    msg.classList.remove("lose");
    msg.classList.add("default-msg");
};

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}

if (window.location.hostname === "adrishikharchowdhury.github.io") {
    const baseTag = document.createElement("base");
    baseTag.href = "/Stone-Paper-Scissors-Cut/docs/";
    document.head.appendChild(baseTag);
}