/*
    HW3 - Ex3
*/

function getNumber(label) {
    var nb = Number.NaN;
    var firstAttempt1 = true;
    while (Number.isNaN(nb)) {
        if (!firstAttempt1) {
            alert("Please enter a valid number.");
        }
        nb = Number(window.prompt(label));
        firstAttempt1 = false;
    }
    return nb;
}

var nb1 = getNumber("Choose number 1:");
var nb2 = getNumber("Choose number 2:");

var addition = nb1 + nb2;
var substraction = nb1 - nb2;
var multiplication = nb1 * nb2;
var division = nb1 / nb2;
var modulo = nb1 % nb2;


var output = document.getElementById('output');

output.innerHTML = "<b>Addition:</b> " + nb1 + " + " + nb2 + " = " + addition + "<br/>";
output.innerHTML += "<b>Substraction:</b> " + nb1 + " - " + nb2 + " = " + substraction + "<br/>";
output.innerHTML += "<b>Multiplication:</b> " + nb1 + " * " + nb2 + " = " + multiplication + "<br/>";
output.innerHTML += "<b>Division:</b> " + nb1 + " / " + nb2 + " = " + division + "<br/>";
output.innerHTML += "<b>Modulo:</b> " + nb1 + " % " + nb2 + " = " + modulo + "<br/>";
