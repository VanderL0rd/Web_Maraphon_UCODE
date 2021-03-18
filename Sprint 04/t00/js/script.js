function transformation() {
    if (document.getElementById("hero").innerHTML === "Bruce Banner") {
        document.getElementById("lab").style.backgroundColor = "#70964b";
        document.getElementById("hero").innerHTML = "Hulk";
        document.getElementById("hero").style.fontSize = "135px";
        document.getElementById("hero").style.letterSpacing = "6px";
    } else if (document.getElementById("hero").innerHTML === "Hulk") {
        document.getElementById("lab").style.backgroundColor = "#ffb300";
        document.getElementById("hero").innerHTML = "Bruce Banner";
        document.getElementById("hero").style.fontSize = "60px";
        document.getElementById("hero").style.letterSpacing = "2px";
    }
}