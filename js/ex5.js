/*
    HW3 - Ex5
*/

var output = document.getElementById('output');

var input = Number(window.prompt("Enter a number:"));

if (Number.isNaN(input)) {
    output.innerHTML = "Invalid number.";
} else {

    var limit = 10

    output.innerHTML = "";
    for (i of Array(limit + 1).keys()) {
        output.innerHTML += input + " x " + i + " = " + i * input + "<br/>";
    }
}
