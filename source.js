

function getComputerChoice(){

    let x=Math.ceil((Math.random()*3));
    let computerChoice;
    switch(x){
        case 1:
            computerChoice="rock";
            break;
        case 2:
            computerChoice="paper";
            break;
        case 3:
            computerChoice="scissor";
            break;
    }
    return computerChoice;

}

function getHumanChoice(){
    let userInput=prompt("choose rock, paper or scissor",undefined).toLowerCase();
    switch(userInput){
        case "rock":
        case "paper":
        case "scissor":
            return userInput;
        default:
            return "invalid";
    }
}

function result(humanChoice, computerChoice){
    if(humanChoice==computerChoice)
        return "tie";
    else if(humanChoice=="rock"){
        switch(computerChoice){
            case "paper":
                return "lose";
                break;
            case "scissor":
                return "win";
        }//end of switch
    }
    else if(humanChoice=="paper"){
        switch(computerChoice){
            case "rock":
                return "win";
                break;
            case "scissor":
                return "lose";
                break;
        }//end of switch
    }
    else if(humanChoice=="scissor"){

        switch(computerChoice){
            case "paper":
                return "win";
                break;
            case "rock":
                return "lose";
                break;
        }//end of switch
    }
}


function playRound(){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    console.log("computer chose: "+computerChoice);
    console.log("\n"+" you chose: "+humanChoice);
    let state=result(humanChoice,computerChoice);
    console.log("\n");
    console.log("Result: "+state);
}

//clicking a button
const choice=document.querySelectorAll("button");
//score stroing variables and other
let hScore=0;
let cScore=0;
let cScoreText=document.querySelector("#computerScore");
let hScoreText=document.querySelector("#humanScore");
let matchResult=document.querySelector("#result");
choice.forEach((button)=>{

        button.addEventListener("click",(e)=>{
            let humanChoice=button.value;
            // console.log(e.target);
            let computerChoice=getComputerChoice();
            // console.log("computer chose: "+computerChoice);
            document.querySelector("#computerChoice").textContent=computerChoice;
            // console.log("\n"+" you chose: "+humanChoice);
            document.querySelector("#humanChoice").textContent=button.value;
            let state=result(humanChoice,computerChoice);
            // console.log("\n");
            // console.log("Result: "+state);
            document.querySelector("#matchResult").textContent=state;
            
            
            if(hScore<5 && cScore<5){
                if(state==="win"){
                    hScore++;
                    // hScoreText.textContent=hScore;
                }
                else if(state=="lose"){
                    cScore++;
                    // cScoreText.textContent=cScore;
                }
                cScoreText.textContent=cScore;
                hScoreText.textContent=hScore;
            }

            if(hScore==5||cScore==5){
                if(hScore>cScore)
                    matchResult.textContent="You win";
                else if(hScore<cScore)
                    matchResult.textContent="You lose";
                else
                    matchResult.textContent="its a Tie!";
                    
            }

    });

});


