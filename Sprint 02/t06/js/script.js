function First_Char_Upp(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function foo() {
    First_Name = prompt("Enter first name");
    if (!First_Name.match(/[A-Za-z]/)) {
        alert("Wrong input!");
        console.log("Wrong input!")
        return;
    }
    Last_Name = prompt("Enter last name");
    if (!First_Name.match(/[A-Za-z]/)) {
        alert("Wrong input!");
        console.log("Wrong input!")
        return;
    }
    First_Name = String(First_Name).toLowerCase(First_Name);
    First_Name = First_Char_Upp(First_Name);
    Last_Name = String(Last_Name).toLowerCase(Last_Name);
    Last_Name = First_Char_Upp(Last_Name);
    greeting = "Hello, " + First_Name + " " + Last_Name + "!";
    alert(greeting);
    console.log(greeting);
}
foo();