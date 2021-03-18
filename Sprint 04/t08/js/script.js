let but_arr = document.getElementsByTagName("button");
let input = document.getElementById("first");
let text = document.getElementsByTagName("textarea");
let out = document.getElementById("third");


let num_1 = parseInt(getCookie("Phone"));
document.cookie = ("Phone=" + num_1 + "; max-age=60");
but_arr[0].innerHTML = "To phone number [" + num_1 + "]";
let num_2 = parseInt(getCookie("Count"));
document.cookie = ("Count=" + num_2 + "; max-age=60");
but_arr[1].innerHTML = "Word count [" + num_2 + "]";
let num_3 = parseInt(getCookie("Replace"));
document.cookie = ("Replace=" + num_3 + "; max-age=60");
but_arr[2].innerHTML = "To phone number [" + num_3 + "]";

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


but_arr[0].onclick = function () {
    let num = input.value;
    let str = '';
    if (/[0-9]/.test(num) && num.length == 10) {
        for (let ind = 0; ind < num.length; ind++) {
            if (ind === 3 || ind === 6) {
                str += '-';
            }
            str += num[ind];
        }
        out.innerHTML = str;
    }
    else {
        out.innerHTML = "invalid number";
    }
    let num_1 = parseInt(getCookie("Phone"));
    num_1++;
    document.cookie = ("Phone=" + num_1 + "; max-age=60");
    but_arr[0].innerHTML = "To phone number [" + num_1 + "]";
};

but_arr[1].onclick = function () {
    let str = text[0].value;
    let in_str = input.value;
    let pos = str.indexOf(in_str);
    let count = 0;
    while (pos !== -1) {
        count++;
        pos = str.indexOf(in_str, pos + 1);
    }
    out.innerHTML = "Word count: " + count;
    let num_2 = parseInt(getCookie("Count"));
    num_2++;
    document.cookie = ("Count=" + num_2 + "; max-age=60");
    but_arr[1].innerHTML = "Word count [" + num_2 + "]";
};

but_arr[2].onclick = function () {
    let str = text[0].value;
    let in_str = input.value;
    let arr = str.split(' ');
    for (let ind = 0; ind < arr.length; ind++) {
        str = str.replace(arr[ind], in_str);
    }
    out.innerHTML = str;
    let num_3 = parseInt(getCookie("Replace"));
    num_3++;
    document.cookie = ("Replace=" + num_3 + "; max-age=60");
    but_arr[2].innerHTML = "To phone number [" + num_3 + "]";
};