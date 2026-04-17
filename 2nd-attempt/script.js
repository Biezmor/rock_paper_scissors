const arr = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll(".btn");  
const buttonBox = document.querySelector("#button-box");


function getComputerChoice () {
    let index = (Math.floor(Math.random() * (arr.length)));
    return arr[index];
};

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound (humanChoice, computerChoice) {
        const results = document.createElement("div");
        results.classList.add("resultBox");
        
        if (humanScore >= 5 || computerScore >= 5) return;
    
        if (humanChoice === computerChoice) {
            results.textContent = `Tie! You both selected ${humanChoice}!`;
           
    
        } else if ((
                humanChoice === arr[0] && computerChoice === arr[1])
            || (humanChoice === arr[1] && computerChoice === arr[2])
            || (humanChoice === arr[2] && computerChoice === arr[0])) {
            computerScore++
            results.textContent = `You lose! ${computerChoice.at(0).toLocaleUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`;
            
    
        } else if ((
                computerChoice === arr[0] && humanChoice === arr[1])
            || (computerChoice === arr[1] && humanChoice === arr[2])
            || (computerChoice === arr[2] && humanChoice === arr[0])) {
            humanScore++
            results.textContent = `You win! ${humanChoice.at(0).toLocaleUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
            
    
           } else {
            results.textContent = 'What the heck is that?'
           };
           buttonBox.appendChild(results);
           const score = document.createTextNode(` So far the score is ${humanScore} : ${computerScore}`)
           results.appendChild(score);
           
    
         if (humanScore === 5 || computerScore === 5) {
            const finalWinner = document.createElement("p");
    
                if (humanScore > computerScore) {
                    finalWinner.textContent = `YOU WON! Humanity ${humanScore} : Computers ${computerScore}`
    
                } else if (humanScore < computerScore) {
                    finalWinner.textContent = `YOU LOST! Humanity ${humanScore} : Computers ${computerScore}`
                
                } else if (humanScore === computerScore) {
                    finalWinner.textContent = `IT'S A TIE! Humanity ${humanScore} : Computers ${computerScore}`
            };
            results.appendChild(finalWinner);
            
            const playAgain = document.createElement("p");
            playAgain.textContent = "Wanna play again?";
            finalWinner.appendChild(playAgain);
    
            const againButton = document.createElement("button");
            againButton.textContent = "Play again";
             
            againButton.addEventListener("click", function () {
                humanScore = 0;
                computerScore = 0;
                const reset = document.querySelectorAll(".resultBox");
                reset.forEach((item)=> item.remove());
            });
         
            playAgain.appendChild(againButton);
        };
        };
        
        btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const humanSelection = btn.textContent;
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        })
    })
    };
playGame()



