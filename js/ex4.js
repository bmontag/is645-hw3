/*
    HW3 - Ex4
*/

var maxAttempt = 3;
var password = "secret";

var input = null;
var attempts = 0;
while (input != password) {
    attempts += 1;

    input = window.prompt("Enter password:");
    if (attempts >= 3) {
        break;
    }
}


var output = document.getElementById('output');

if (password == input) {
    output.innerHTML = "You entered the correct password after " + attempts + " attempt(s)";
} else {
    output.innerHTML = "Your account is locked!  You failed to enter the correct password " + attempts + " times";
}
