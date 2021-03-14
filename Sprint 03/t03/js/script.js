class Human {
    constructor(firstName, lastName, gender, age, calories = 200) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
        this.time = function () {
            let a = setInterval(() => { this.calories -= 200 }, 60000);
        };
        this.time();
    }

    sleepFor() {
        document.getElementById("out").innerHTML = 'I am sleeping';
        setTimeout(() => {
            document.getElementById("out").innerHTML = "I'm awake now";
            setTimeout(() => document.getElementById("out").innerHTML = "", 2000);
        }, 5000);
    }

    feed() {
        if (this.calories > 500) {
            document.getElementById("out_1").innerHTML = 'I am not hungry';
            setTimeout(() => document.getElementById("out_1").innerHTML = "", 2000);
        } else if (this.calories < 500) {
            document.getElementById("out_1").innerHTML = 'Nom nom nom';
            this.calories = this.calories + 200;
            if (this.calories < 500) {
                setTimeout(() => {
                    document.getElementById("out_1").innerHTML = "I am still hungry";
                    setTimeout(() => document.getElementById("out_1").innerHTML = "", 2000);
                }, 10000);
            } else {
                setTimeout(() => document.getElementById("out_1").innerHTML = "", 10000)
            }

        }

    }
}

class Superhero extends Human {
    fly() {
        document.getElementById("out").innerHTML = 'I am flying';
        setTimeout(() => document.getElementById("out").innerHTML = "", 10000);
    }

    fightWithEvil() {
        document.getElementById("out_1").innerHTML = 'Khhhh-chh..';
        setTimeout(() => {
            document.getElementById("out_1").innerHTML = "Bang-g-g-g.";
            setTimeout(() => {
                document.getElementById("out_1").innerHTML = "Evil is defeated";
                setTimeout(() => document.getElementById("out_1").innerHTML = "", 3000);
            }, 3000);
        }, 3000);
    }

}
var human = new Superhero();
document.getElementById("btn_3").style.display = "none";
document.getElementById("btn_4").style.display = "none";
document.getElementById("btn_1").onclick = function () { human.sleepFor(); };
document.getElementById("btn_2").onclick = function () { human.feed(); };
document.getElementById("turn").onclick = function () {
    document.getElementById("btn_1").style.display = "none";
    document.getElementById("btn_2").style.display = "none";
    document.getElementById("btn_3").style.display = "block";
    document.getElementById("btn_4").style.display = "block";
    document.getElementById("turn").style.display = "none";
    document.getElementById("hum").innerHTML = "Superhero";
}
document.getElementById("btn_3").onclick = function () {
    human.fly();
}
document.getElementById("btn_4").onclick = function () {
    human.fightWithEvil();
}