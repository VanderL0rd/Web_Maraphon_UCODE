
function th(name, str, age) {
    this.name = document.createElement("th");
    let txt_1 = document.createTextNode(name);
    this.name.appendChild(txt_1);
    this.str = document.createElement("th");
    let txt_2 = document.createTextNode(str);
    this.str.appendChild(txt_2);
    this.age = document.createElement("th");
    let txt_3 = document.createTextNode(age);
    this.age.appendChild(txt_3);
}
function td(name, str, age) {
    this.name = document.createElement("td");
    this.name.setAttribute("class", "name")
    let txt_1 = document.createTextNode(name);
    this.name.appendChild(txt_1);
    this.str = document.createElement("td");
    this.str.setAttribute("class", "stren")
    let txt_2 = document.createTextNode(str);
    this.str.appendChild(txt_2);
    this.age = document.createElement("td");
    this.age.setAttribute("class", "age");
    let txt_3 = document.createTextNode(age);
    this.age.appendChild(txt_3);
}

let table = document.createElement("table");
let arr = [
    document.createElement("tr"),
    document.createElement("tr"),
    document.createElement("tr"),
    document.createElement("tr"),
    document.createElement("tr"),
    document.createElement("tr"),
    document.createElement("tr"),
    document.createElement("tr"),
    document.createElement("tr"),
    document.createElement("tr"),
]
for (let ind = 0; ind < arr.length; ind++) {
    table.appendChild(arr[ind]);
}
let a = new th("Name", "Strength", "Age");
arr[0].appendChild(a.name);
arr[0].appendChild(a.str);
arr[0].appendChild(a.age);
let arr_td = [
    new td("Black Panther", 66, 53),
    new td("Captain America", 79, 137),
    new td("Captain Marvel", 97, 26),
    new td("Hulk", 80, 49),
    new td("Iron Man", 88, 48),
    new td("Spider-Man", 78, 16),
    new td("Thanos", 99, 1000),
    new td("Thor", 95, 1000),
    new td("Yon-Rogg", 73, 52),
]
for (let ind = 1; ind < arr.length; ind++) {
    arr[ind].appendChild(arr_td[ind - 1].name);
    arr[ind].appendChild(arr_td[ind - 1].str);
    arr[ind].appendChild(arr_td[ind - 1].age);
}
document.body.appendChild(table);


let l = document.getElementsByTagName("th")[0];
let l1 = document.getElementsByTagName("th")[1];
let l2 = document.getElementsByTagName("th")[2];
table.setAttribute("id", "tab");


function sort_str(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tab");
    switching = true;

    dir = "asc";

    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function sort_num(n) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tab");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

l.onclick = function () { sort_str(0) };
l1.onclick = function () { sort_str(1) };
l2.onclick = function () { sort_num(2) };