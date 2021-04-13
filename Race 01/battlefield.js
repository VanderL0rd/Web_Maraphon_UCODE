function start() {
    let card_arr = document.getElementsByClassName("cards")[1].getElementsByClassName('card');
    for (let ind = 0; ind < card_arr.length; ind++) {
        card_arr[ind].onclick = function () {
            console.log(card_arr[ind]);
            let par = document.getElementsByClassName('cards')[1]
            if (card_arr[ind].parentNode == par) {
                let pl = document.getElementsByClassName('player_pl_cards')[0];
                pl.appendChild(card_arr[ind]);
                // par.removeChild(card_arr[ind]);
            } else if (card_arr[ind].parentElement == document.getElementsByClassName('player_pl_cards')[1]) {

            }
        }
        console.log(card_arr[ind]);
    }
}
start();