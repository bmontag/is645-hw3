/*
    HW3 - Ex6
*/

var output = document.getElementById('output');

function getValue(label, min, max) {
    var input = null;
    while (input == null || input == NaN || input < min || input > max) {
        input = Number(window.prompt(label));
    }
    return input;
}

var hours = getValue("Enter Hours (0 - 23):", 0, 23);
var minutes = getValue("Enter Minutes (0 - 59):", 0, 59);
var seconds = getValue("Enter Secondes (0 - 59):", 0, 59);

output.innerHTML = "<b>Time input:</b> " + hours + "h" + minutes + "m" + seconds + "s<br/>";

var secondsPlus1 = (seconds + 1) % 60;
var minutesPlus1 = minutes;
var hoursPlus1 = hours;

if (secondsPlus1 == 0) {
    minutesPlus1 = (minutesPlus1 + 1) % 60;
    if (minutesPlus1 == 0) {
        hoursPlus1 = (hoursPlus1 + 1) % 24;
    }
}

output.innerHTML += "<b>One second later:</b> " + hoursPlus1 + "h" + minutesPlus1 + "m" + secondsPlus1 + "s";
