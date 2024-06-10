let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6], 
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
};

const draw = () => {
    msg.innerText = `It's a Draw`;
    msgContainer.classList.remove("hide");
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for(let val of winningPattern) {
        let pos0val = boxes[val[0]].innerText;
        let pos1val = boxes[val[1]].innerText;
        let pos2val = boxes[val[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos0val != "") {
            if(pos0val == pos1val && pos1val == pos2val) {
                showWinner(pos1val);
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.style.color = "#A3B18A";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#588157";
            turnO = true;
        }
        box.disabled = true;
        count++;
        
        if(count === 9) {
            draw();
        }

        checkWinner();
    })
});

resetBtn.addEventListener("click", resetGame);

newGameBtn.addEventListener("click", () => {
    msgContainer.classList.add("hide");    
    resetGame();
});