function getFormattedDate(dateObject) {
    arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (dateObject.getDate() < 10) {
        str = `0` + dateObject.getDate();
    }
    else if (dateObject.getDate() >= 10) {
        str = dateObject.getDate();
    }
    if (dateObject.getMonth() + 1 < 10) {
        str += '.' + `0` + (dateObject.getMonth() + 1)
    } else {
        str += '.' + (dateObject.getMonth() + 1)
    }
    str += '.' + dateObject.getFullYear() + " ";
    if (dateObject.getHours() < 10) {
        str += `0` + dateObject.getHours() + ":";
    } else {
        str += dateObject.getHours() + ":";
    }
    if (dateObject.getMinutes() < 10) {
        str += `0` + dateObject.getMinutes() + " ";
    } else {
        str += dateObject.getMinutes() + " ";
    }
    str += arr[dateObject.getDay() - 1];
    return str;
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

console.log(getFormattedDate(date0)); //01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));
console.log(getFormattedDate(date2));