/*
    HW3 - Ex1
*/

const standingsUnits = [91, 61, 31, 0]
const standingsNaming = ["Senior", "Junior", "Sophomore", "Freshman"]

var name = window.prompt("Enter your name:");

var unitsCount = -1
while (Number.isNaN(unitsCount) || unitsCount < 0) {
    unitsCount = Number(window.prompt("Enter your number of units completed:"));
    
    if (Number.isNaN(unitsCount) || unitsCount < 0) {
        alert("Please enter a valid number.");
    }
}

var currentStanding = null
for (var i = 0; i < standingsUnits.length; i++) {
    if (unitsCount >= standingsUnits[i]) {
        currentStanding = standingsNaming[i];
        break;
    }
}

var output = document.getElementById('output');

output.innerHTML = "Hello <i>" + name + "</i><br/>";
output.innerHTML += "Your grade standing is <i>" + currentStanding + "</i>";
