document.addEventListener("DOMContentLoaded", DOMReady);

function DOMReady() {
    document.getElementById("calculate").addEventListener("click", handleCalculation);
}

function handleCalculation() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    checkLimits(min, max);

    const limit = getCalculationLimit(min, max);
    const result = calculate(limit);
    printResult(limit, result);
}

function checkLimits(min, max) {
    if (!check(min) || !check(max)) {
        throw new Error("Input not correct.");
    }
    if (min > max) {
        throw new Error("Input not correct.");
    }
}

function getCalculationLimit(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function calculate(value) {
    if (!check(value)) {
        return 0;
    }
    return value < 2 ? 1 : value * calculate(value - 1);
};

function check(value) {
    return !isNaN(value);
}

function printResult(limit, result) {
    document.getElementById("limit").innerHTML = new Intl.NumberFormat().format(limit);
    document.getElementById("result").innerHTML = new Intl.NumberFormat().format(result)
}