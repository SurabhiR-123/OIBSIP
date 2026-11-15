const textBox= document.getElementById("textBox");
const error = document.getElementById("error");
const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");
let temp;

function convert(){
    error.style.display= "none";
    error.textContent= "";
     // Validate input
    if (textBox.value.trim() === "" || !Number.isFinite(textBox.valueAsNumber)) {
        error.textContent = "Please enter a valid temperature!";
        error.style.display = "block";
        return;
    }

    temp = textBox.valueAsNumber;

    // Get selected unit
    const unit = document.querySelector('input[name="unit"]:checked').value;

    let celsius;
    let fahrenheit;
    let kelvin;

    // Convert temperature
    if (unit === "celsius") {
        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;
    }
    else if (unit === "fahrenheit") {
        fahrenheit = temp;
        celsius = (temp - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    }
    else {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    // Check absolute zero
    if (kelvin < 0) {
        error.textContent = "Temperature cannot be below absolute zero!";
        error.style.display = "block";

        celsiusResult.textContent = "—";
        fahrenheitResult.textContent = "—";
        kelvinResult.textContent = "—";
        return;
    }

    // Display results
    celsiusResult.textContent = celsius.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    kelvinResult.textContent = kelvin.toFixed(2) + " K";

}