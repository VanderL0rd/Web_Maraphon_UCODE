class Calculator {
    constructor(number = 0) {
        this.result = number;
    }

    init(number) { this.result = number; }
    add(number) { this.result += number; }
    mul(number) { this.result *= number; }
    div(number) { this.result /= number; }
    sub(number) { this.result -= number; }
    alert() { this.alert(this.results); }
};
const calc = new Calculator();
console.log(
    calc.init(2).add(2).mul(3).div(4).sub(2).result
);
calc.alert();