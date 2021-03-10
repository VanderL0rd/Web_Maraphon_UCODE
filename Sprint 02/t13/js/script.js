function Calculator(number = 0) {
    this.result = number;

    this.init = function (number) { this.result = number; return this; }
    this.add = function (number) { this.result += number; return this; }
    this.mul = function (number) { this.result *= number; return this; }
    this.div = function (number) { this.result /= number; return this; }
    this.sub = function (number) { this.result -= number; return this; }
    this.alert = function () { setTimeout(alert, 5000, this.result); }
};
const calc = new Calculator();
console.log(
    calc.init(2).add(2).mul(3).div(4).sub(2).result
);
calc.alert();