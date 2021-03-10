function foo() {
    var animal = prompt('What animal is the superhero most similar to?');
    if (/[0-9]/.test(animal) || /\s/.test(animal) || animal.length > 20) {
        alert("Incorrect input animal");
        return;
    }
    var gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
    var age = prompt('How old is the superhero?');
    var Null = new RegExp('');
    let description;
    if (/[0-9]/.test(gender)) {
        alert("Incorrect");
        return;
    }
    if (!/[0-9]/.test(age) || age / 100000 < 0 || /^0/.test(age)) {
        alert(false);
        return;
    }
    if (/male/.test(gender)) {
        if (age < 18) {
            description = "boy";
        } else {
            description = "man";
        }
    } else if (/female/.test(gender)) {
        if (age < 18) {
            description = "girl";
        } else {
            description = "woman";
        }
    }
    else if (Null.test(gender)) {
        if (age < 18) {
            description = "kid";
        } else {
            description = "hero";
        }
    }
    else {
        alert('Incor');
        return;
    }
    alert('The superhero name is ' + animal + '-' + description);
}

foo();