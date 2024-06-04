let numbers = [];

function addNumber() { //retive a number, add to array, clear the input box, update html element
    let numberInput = document.getElementById('numberInput').value;
    if (numberInput !== "") {
        numbers.push(Number(numberInput));
        document.getElementById('numberInput').value = ""; // Clear input box
        document.getElementById('array').innerHTML = "<p>The array of numbers is: " + numbers.join(", ") + "</p>";
    }
}
//so that they enter numbers
function findMinMax() {
    if (numbers.length === 0) {
        document.getElementById('result').innerHTML = "<p>Please add some numbers first.</p>";
        return;
    }

    let minNumber = Math.min(...numbers);
    let maxNumber = Math.max(...numbers);

    document.getElementById('result').innerHTML = "<p>The minimum number is: " + minNumber + "</p>";
    document.getElementById('result').innerHTML += "<p>The maximum number is: " + maxNumber + "</p>";
}


