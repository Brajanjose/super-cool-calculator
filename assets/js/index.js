const display = document.getElementById("display");

function appendDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    }
    // If there is some error
    catch (error) {
        display.value = "Error!";
    }
}

function square() {
    try {
        // If display is empty or contains invalid input
        if (display.value === "" || isNaN(display.value)) {
            display.value = "Error!";
            return;
        }

        let currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 2); // Calculate the square of the current number
    } catch (error) {
        display.value = "Error!";
    }
}
