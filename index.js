const RATIO_METER_FEET = 3.281;
const RATIO_LITER_GALLON = 0.264;
const RATIO_KG_POUND = 2.204;

const inputEl = document.querySelector(".input-value")
const btnConvertEl = document.querySelector(".btn-convert")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

btnConvertEl.addEventListener("click", convertInputValue)

function convertInputValue() {
    lengthEl.innerHTML = '';
    lengthEl.appendChild(createConvertedResultEl("Length (Meter/Feet)", "meters", "feet", RATIO_METER_FEET));
    volumeEl.innerHTML = '';
    volumeEl.appendChild(createConvertedResultEl("Volume (Liters/Gallons)", "liters", "gallons", RATIO_LITER_GALLON));
    massEl.innerHTML = '';
    massEl.appendChild(createConvertedResultEl("Mass (Kilograms/Pounds)", "kilos", "pounds", RATIO_KG_POUND));
}

function createConvertedResultEl(title, fromUnit, toUnit, ratio) {
    let inputValue = Number(inputEl.value);
    const titleEl = document.createElement("h3");
    titleEl.textContent = title;
    const convertEl = document.createElement("p");
    convertEl.textContent = `${inputValue} ${fromUnit} = ${(inputValue * ratio).toFixed(3)} ${toUnit} |                       ${inputValue} ${toUnit} = ${(inputValue / ratio).toFixed(3)} ${fromUnit}`;
    const resultEl = document.createElement("div")
    resultEl.appendChild(titleEl).appendChild(convertEl)
    return resultEl;
}