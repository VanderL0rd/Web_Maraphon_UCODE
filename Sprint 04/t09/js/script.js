let add = document.getElementById("add");
let clear = document.getElementById("clear");
let input = document.getElementById("input");
let output = document.getElementById("output");
let form = document.getElementById("input_1")
function func() {
    let str = "";
    let num = parseInt(localStorage.getItem('num'));
    if (isNaN(num)) {
        str = "";
        let a = document.createElement("p");
        a.innerHTML = str;
        form.appendChild(a);
    }
    else {
        for (let ind = 1; ind <= num; ind++) {
            str = "--> " + localStorage.getItem("key" + ind) + "\n\n";
            console.log(str);
            let a = document.createElement("p");
            a.innerHTML = str;
            form.appendChild(a);
        }
    }
}
func();

add.onclick = function () {
    let str = input.value;
    let num = parseInt(localStorage.getItem('num'));
    if (isNaN(num)) {
        num = 1;
    }
    else {
        num++;
    }
    let date = new Date();
    let date_str = "[0" + date.getDay() + ".0" + date.getMonth() + "." + date.getFullYear() + ", " + date.getHours() +
        ":" + date.getMinutes() + ":" + date.getSeconds() + "]";
    localStorage.setItem("num", "" + num);
    localStorage.setItem("key" + num, str + date_str);
};

clear.onclick = function () {
    localStorage.clear();
};
