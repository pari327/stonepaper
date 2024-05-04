let userScore=0;
let compScore=0;
let youWin;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw, Please Try Again!";
    msg.style.backgroundColor="#081b31";
}
const showWinner= (youWin,userChoice,compChoice)=>{
    if(youWin===true)
        {
            userScore++;
            userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You Win!yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you loose");
        msg.innerText=`You Loose!  ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user Choice=",userChoice);
    const compChoice=genComputerChoice();
    console.log("comp choice=",compChoice);

    if(userChoice=== compChoice){
        drawGame();
    }else{
        //let youWin;
        if(userChoice==="rock"){
          youWin=  compChoice === "paper" ? false :true;
        }else if(userChoice==="paper"){
            youWin=compChoice==="rock" ? true : false;
        }else{
           youWin= compChoice==="paper"? true : false;
        }
        showWinner(youWin,userChoice,compChoice); 
    }
};


choices.forEach((choice) =>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
        //console.log("choices was clicked",userChoice);
        playGame(userChoice);
    })
})