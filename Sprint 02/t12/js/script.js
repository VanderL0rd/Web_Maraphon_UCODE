var concat = (function (string1, string2) {
    if (typeof (string2) == 'undefined') {
        function call() {
            if (typeof (call.count) == 'undefined') {
                call.count = 0;
            }
            var string2 = prompt("Enter second string");
            call.count++;
            return string1.concat(" ", string2);
        }
        return call;
    }
    else {
        function call_1() {
            return string1.concat(" ", string2);
        }
        return call_1;
    }
});