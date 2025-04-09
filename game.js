const board = document.getElementById('board');
const cell = document.getElementsByClassName('cell');
const players = ['X', 'O'];
let currentPlayer = players[0];

//create empty array of current cells for each player
const xBoard = [];
const oBoard = [];

const winningCombinations = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
]

function markButton(cellPosition) {
    const cell = document.getElementById(cellPosition);
    //abort function if cell is not empty
    //Change the innerHTML of the cell to display Player ID
    if (cell.innerHTML !== ''){
        return;
    }
    cell.innerHTML = currentPlayer;

    //push current cell to player's array and check if player has won
    if (currentPlayer === 'X'){
        xBoard.push(cellPosition);
        if (winChecker(xBoard)){
            alert('Player X wins!');
        }
        currentPlayer = players[1];
    } else if (currentPlayer === 'O'){
        oBoard.push(cellPosition);
        if (winChecker(oBoard)){
            alert('Player O wins!');
        }
        currentPlayer= players[0];
    }

    console.log(xBoard);
    console.log(oBoard);

    //Alerts players that they have tied
    if (xBoard.length + oBoard.length === 9) {
        alert("Cat's game! Start over to play again.")
    }
}
// check if winning combination
//iterates through each subArray of the winningCombinations array, labeling each one a 'combo'
//for each combo, checks if all cells are present in the selected board, if yes, returns a boolean 'true'
function winChecker(board){
    for (let combo of winningCombinations) {
        if (combo.every(cell => board.includes(cell)))
            return true;
    } 
    return false;
}

// restartFunction()
    //refresh page




// //check if current player has winning combination

// let isWinner = false
// //if winner is false check next combo positions
//     //if no more positions return false
// //if winner remains true return true
// //end check

// winningCombinations.forEach(combo => {
// //combo = ['0','1','2']
// console.log(combo);

// combo.forEach( position => {
//     //comapre each position in that combo
//     //against the board passed in
// })
// })