var num = 15, big_num = 9007199254740991, str = 'Hello', run = true, Null = null;
var Undifined, b = Symbol('b');
let user = {
    name: "John",
    age: 30
};
let num_type = typeof (num);
let big_num_type = typeof (big_num);
let str_type = typeof (str);
let run_type = typeof (run);
let Null_type = typeof (Null);
let Undifined_type = typeof (Undifined);
let user_type = typeof (user);
let b_type = typeof (b);
let alert_type = typeof (alert);

alert('num is ' + num_type + '\nbig_num is ' + big_num_type
    + '\nstr is ' + str_type + '\nrun is ' + run_type
    + '\nNull is ' + Null_type + '\nUndifined is ' + Undifined_type
    + '\nuser is ' + user_type + '\nb is ' + b_type + '\nalert is ' + alert_type);