let first = document.getElementById("ins_box_1");
let second = document.getElementById("ins_box_2");
let third = document.getElementById("ins_box_3");

second.style.display = "none";
third.style.display = "none";

document.getElementById("film_1").onclick = function () {
    second.style.display = "none";
    third.style.display = "none";
    first.style.display = "flex";
}

document.getElementById("film_2").onclick = function () {
    first.style.display = "none";
    second.style.display = "flex";
    third.style.display = "none";
}

document.getElementById("film_3").onclick = function () {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "flex";
}

