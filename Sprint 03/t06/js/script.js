function* generator() {
    let num_1 = 1;
    let num_2 = Number(prompt("Number is " + num_1));
    while (!isNaN(num_2)) {
        num_1 += num_2;
        yield num_1;
        if (num_1 >= 10000) {
            num_1 = 1;
        }
        num_2 = Number(prompt("Number is " + num_1));

    }
}
var gen = generator();
var a = gen.next().value;
while (a != undefined) {
    a = gen.next().value;
}