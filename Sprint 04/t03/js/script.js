let image = document.getElementsByTagName("img");
let ind = 0;
setInterval(() => {
    image[ind].style.display = "none";
    if (ind < image.length - 1) {
        ind++;
    } else {
        ind = 0;
    }
    image[ind].style.display = "block";
}, 3000);

document.getElementById("left").onclick = function () {
    image[ind].style.display = "none";
    if (ind > 0) {
        ind--;
    } else {
        ind = 3;
    }
    image[ind].style.display = "block";
};

document.getElementById("right").onclick = function () {
    image[ind].style.display = "none";
    if (ind < image.length - 1) {
        ind++;
    } else {
        ind = 0;
    }
    image[ind].style.display = "block";
};