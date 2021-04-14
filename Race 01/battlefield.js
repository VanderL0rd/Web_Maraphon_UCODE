function start() {
    let card_arr = document.getElementsByClassName("cards")[1].getElementsByClassName('card');
    for (let ind = 0; ind < card_arr.length; ind++) {
        let card = document.getElementsByClassName("cards")[1].getElementsByClassName('card')[ind];
        card.onclick = function () {
            console.log(card);
            let par = document.getElementsByClassName('cards')[1];
            if (card.parentNode == par) {
                let pl = document.getElementsByClassName("player_pl_cards")[0];
                pl.appendChild(card);
            }
        }
    }
}
start();

let max = 30;
let num = 0;
let timer_1 = setInterval(
    () => {
        document.getElementsByClassName("Time")[0].innerHTML = "Time: " + (max - num);
        num++;
        if (max + 1 == num) {
            // TO DO: func();
            clearInterval(timer_1);
        }
    }, 1000);
let timer_0 = setInterval(() => {
    let max = 30;
    let num = 0;
    let timer_1 = setInterval(
        () => {
            document.getElementsByClassName("Time")[0].innerHTML = "Time: " + (max - num);
            num++;
            if (max + 1 == num) {
                // TO DO: func();
                clearInterval(timer_1);
            }
        }, 1000);
}, 31000);
