function compareNumbers(a, b) {
    return a % 2 - b % 2 || a - b;
}
function sortEvenOdd(arr) {
    arr.sort(compareNumbers);
}

const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
sortEvenOdd(arr);
console.log(arr);