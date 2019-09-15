let comp;
let input;
let computerpoint = 0
let playerpoint = 0



function computerPlay(){
    let number = Math.floor(Math.random()*3);
    if(number == 0){
    comp = "ROCK"
    }
    else if(number == 1){
    comp = "SCISSORS"
    }
    else if(number == 2){
    comp = "PAPER"
    }
    
    alert(`Computer played ${comp}!`)
    }

function getInput(){
input = prompt("What is your play?").toUpperCase()
if(input !== "ROCK" && input !== "SCISSORS" && input !== "PAPER"){
    alert("Please input rock,paper or scissors")
    getInput()
}
alert(`You played ${input}!`)
}


function game(){
    
    getInput();
    computerPlay();
    if (comp == "ROCK" && input == "SCISSORS"){
        alert(`${comp} beats ${input}! Computer wins!`)
    computerpoint++;
return computerpoint;}
    else if (comp == "SCISSORS" && input == "PAPER"){
        alert(`${comp} beats ${input}! Computer wins!`)
        computerpoint++;
        }
    else if (comp == "PAPER" && input == "ROCK"){
        alert(`${comp} beats ${input}! Computer wins!`)
        computerpoint++;
        }
    else if (comp == "SCISSORS" && input == "ROCK"){
        alert(`${input} beats ${comp}! Player wins!`)
        playerpoint++;
        }
    else if (comp == "PAPER" && input == "SCISSORS"){
        alert(`${input} beats ${comp}! Player wins!`)
        playerpoint++;
        }
    else if (comp == "ROCK" && input == "PAPER"){
        alert(`${input} beats ${comp}! Player wins!`)
        playerpoint++;
        }
    else if(comp == input){
        alert('It\'s a tie!') 
        
    
    }
   
}
 


function bestoffive(){


for(i = 0; i < 5; i ++){
game()
}

if(playerpoint>computerpoint){
alert(`Player ${playerpoint} - Computer ${computerpoint}. Player wins!`)
}
else if(playerpoint<computerpoint){
    alert(`Player ${playerpoint} - Computer ${computerpoint}. Computer wins!`)}
else{
    alert("A tie!")
}

}


bestoffive()


