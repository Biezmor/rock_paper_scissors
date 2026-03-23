// Make the computer generate one of 3 string values
// rock or paper or scissors
//make a number between 1 and 10 OK
// narrow down the number to 1-3 ?
// return a number between 1 and 3
// bind 1, 2, 3 to rock, paper, scissors
//




function getComputerChoice (rock, paper, scissors) {
 let result = (Math.ceil(Math.random() * 3));
 return result;
}

getComputerChoice();