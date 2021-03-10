function checkDivision(beginRange, endRange) {
    for (i = beginRange; i <= endRange; i++) {
        str = "";
        if (i % 2 == 0) {
            str = str + i + " is even";
        }
        if (i % 3 == 0 && str === "") {
            str = str + i + " is multiple of 3";
        }
        else if (i % 3 == 0) {
            str = str + ", is multiple of 3";
        }
        if (i % 10 == 0 && str === "") {
            str = str + i + " is multiple of 10";
        }
        else if (i % 10 == 0) {
            str = str + ", is multiple of 10";
        }
        if (str === "") {
            str = i + " -"
        }
        console.log(str);
    }
}
function main() {
    var start = Number(prompt("Enter first number"));
    if (start == NaN) {
        alert("First number is invalid");
        start = 1;
    }
    var end = Number(prompt("Enter second number"));
    if (end == NaN) {
        alert("Second number is invalid");
        end = 100;
    }
    checkDivision(start, end);
}
main();