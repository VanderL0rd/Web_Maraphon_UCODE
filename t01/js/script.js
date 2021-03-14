function removeDuplicates() {
    let str1 = this.replace(/ +/g, ' ').trim();
    let str = str1.split(" ");
    var output = [];
    for (var i = 0; i < str.length; i++) {
        if (output.indexOf(str[i]) === -1) {
            output.push(str[i]);
        }
    }
    return output.join(" ");
}

String.prototype.removeDuplicates = removeDuplicates;

str = "Giant Spiders?  What’s next? Giant Snakes? ";
str = str.removeDuplicates();
console.log(str);