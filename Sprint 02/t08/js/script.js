function checkBrackets(str) {
    let left_br = 0;
    let right_br = 0;
    let result = 0;
    if (!str) {
        return -1;
    }

    for (let iter = 0; iter < str.length; iter++) {

        if (str[iter] == '(') {
            left_br++;
        }
        else if (str[iter] == ')') {
            if (left_br == 0) {
                right_br++;
            }
            else {
                left_br--;
            }
        }
    }
    result = left_br + right_br;
    return result;
}

