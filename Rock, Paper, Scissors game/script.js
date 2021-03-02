"use strict"

let gameScore = 0;
let choosed = "";
let array = ["rock", "scissors", "paper"];

paper.addEventListener("click", choose);
rock.addEventListener("click", choose);
scissors.addEventListener("click", choose);
again.addEventListener("click", () => {
    start.style.display = "block";
    end.style.display = "none";
});
rulesButton.addEventListener("click", () => {
    rules.style.display = "block";
});
closeRules.addEventListener("click", () => {
    rules.style.display = "none";
});





function game() {
    let randomChoosed = random();

    start.style.display = "none";
    player.src = `images/${choosed}.png`;
    house.src = `images/${randomChoosed}.png`;
    end.style.display = "block";

    if (choosed == randomChoosed) {

        result.innerHTML = "DRAW";

    } else if (choosed == randomChoosed - 1 || choosed == randomChoosed + 2) {

        score.innerHTML = ++gameScore;
        result.innerHTML = "YOU WIN";

    } else {

        if (gameScore == 0) {
            score.innerHTML = gameScore;
        } else {
            score.innerHTML = --gameScore;
        }
        
        result.innerHTML = "YOU LOSE";
    }

}

function random() {
    return Math.floor(Math.random() * 3); // 0: 'Rock', 1: 'Scissors', 2: 'Paper'  
}

function choose() {
    choosed = array.indexOf(this.id);
    game();
}

