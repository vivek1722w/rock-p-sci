let userscore = 0;
let compscore = 0;

const msgpara = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");
const rstbtn = document.querySelector("#resetbtn");

const choices = document.querySelectorAll(".choice");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx]
};

const whowins = (userwin, compchoice, userchoice) => {
    if (userwin === true) {
        console.log("you wins");
        msg.innerText = `You Win ! Your ${userchoice} Beats the ${compchoice} `;
        msg.style.backgroundColor = "green";
        userscore++;
        user_score.innerText = userscore;
    }
    else {
        msg.innerText = `You lost ! ${compchoice} Beats Yours ${userchoice} `;
        msg.style.backgroundColor = "red";
        compscore++;
        comp_score.innerText = compscore;
    }
};
const gamedraw = () => {
    console.log("match tie !");
    msg.innerText = "Match Tie!";
    msg.style.backgroundColor = "blue";
};


const playgame = (userchoice) => {
    console.log("userchoice = ", userchoice);
    const compchoice = getcompchoice();
    console.log("comp choice = ", compchoice);
    if (compchoice === userchoice) {
        gamedraw();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;

        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        whowins(userwin, compchoice, userchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});
rstbtn.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    user_score.innerText = userscore;
    comp_score.innerText = compscore;
    msgpara.innerText = "Play Your Move";
    msg.style.backgroundColor = "black";
});