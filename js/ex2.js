/*
    HW3 - Ex2
*/

const dayAbbrs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const dayFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var firstAttempt = true;
var input = null;
while (!dayAbbrs.includes(input)) {
    if (!firstAttempt) {
        alert("Please enter a valid 3-letters day abbreviation.");
    }

    var input = window.prompt("Enter a 3-letters day abbreviation:");

    firstAttempt = false;
}

var dayEntered = null;
var nextDay = null;
for (var i = 0; i < dayAbbrs.length; i++) {
    if (input == dayAbbrs[i]) {
        dayEntered = dayFull[i];
        nextDay = dayFull[(i + 1) % dayAbbrs.length];
        break;
    }
}

var output = document.getElementById('output');

output.innerHTML = "You entered: <i>" + dayEntered + "</i><br/>";
output.innerHTML += "The following day is: <i>" + nextDay + "</i>";
