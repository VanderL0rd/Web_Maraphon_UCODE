class Human {
    constructor(first, last, gender, age, calories = 250) {
        this.first_name = first;
        this.last_name = last;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
    }
    eat = function () {
        console.log(this.calories);
        this.calories += 200;
        setTimeout(() => console.log(this.calories), 10000);
    }
}
var hum = new Human();
let a = document.getElementById("Btn_1");
a.onclick = function () { hum.eat(); };