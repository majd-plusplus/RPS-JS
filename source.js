

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
        return "TIE";
    else if(humanChoice=="rock"){
        switch(computerChoice){
            case "paper":
                return "lose";
                break;
            case "scissor":
                return "wins";
        }//end of switch
    }
    else if(humanChoice=="paper"){
        switch(computerChoice){
            case "rock":
                return "WIN";
                break;
            case "scissor":
                return "lose";
                break;
        }//end of switch
    }
    else if(humanChoice=="scissor"){

        switch(computerChoice){
            case "paper":
                return "WIN";
                break;
            case "rock":
                return "LOSE";
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

for(let i=0;i<5;i++){
    console.log(`round NO: ${i+1} \n`);
    playRound();
}
