let validator = {
    set: function (target, prop, val) {
        if (prop == 'age') {
            if (typeof (val) == 'number') {
                if (val > 0 && val < 300) {
                    target[prop] = val;
                }
                else {
                    throw new RangeError('The age is invalid');
                }
            }
            else {
                throw new TypeError('The age is not an integer');
            }
        }
        else {
            target[prop] = val;
        }
    }
}

let person = new Proxy({}, validator);
person.age = 100;// Setting value'100' to 'age'
console.log(person.age);// Trying to access the property'age'...// 100
person.gender = "male";// Setting value'male' to 'gender'
console.log(person.gender);
//person.age = 'young';// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid
