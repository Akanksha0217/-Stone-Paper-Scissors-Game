let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

let userScorePara =document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

//take userchoice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id")
        // console.log("choice was click",userChoice);
        playGame(userChoice);
    })
})


//computer choice
const genComChoice =() =>{
    const options= ["rock","paper","scissor"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
}

//draw condition
const drawGame= () =>{
    console.log("game was draw")
      msg.innerText= "Game Draw.Play again";
      msg.style.backgroundColor = "#081b31";
}
//user win
const showWinner = (userWin,userChoice,compChoice) =>{
    // let userWin;
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("you win!")
        msg.innerText= `You win!🥳 Your ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText= `You lost..😖 computer ${compChoice} beats your ${userChoice}`;
        
         msg.style.backgroundColor = "red";
    }
}

const playGame =(userChoice) => {
  console.log("user choice",userChoice)

  // Generate computer choice
  const compChoice =genComChoice();
  console.log("comp choice",compChoice);

//draw game
 if (userChoice.toLowerCase() == compChoice.toLowerCase()){
    drawGame();
 }
  else{
    let userWin= true;
    if(userChoice === "rock"){
         userWin = compChoice ==="paper"? false: true;
    }else if(userChoice === "paper"){
        userWin =compChoice ==="scissor" ? false:true;
    }else{
        userWin =compChoice === "rock" ? false: true;
    }
    showWinner(userWin, userChoice, compChoice);
  }

};

