//
//time handling
//
const time = document.getElementById("time");

function updateTime() {
    const now = new Date();

    if(now.getMinutes() <= 9) {
        time.innerHTML = `${now.getHours()}:0${now.getMinutes()}`;
    } else {
        time.innerHTML = `${now.getHours()}:${now.getMinutes()}`;
    }
}
updateTime();
setInterval(updateTime, 1000);


//
//numberpad handling
//
const output = document.getElementById("results-div");
const input = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");

const numbers = {};

[...document.getElementsByClassName("number")].forEach(el => numbers[el.id] = el);

for (const key in numbers) {
    numbers[key].addEventListener("click", () => addToInput(numbers[key].value));
};

function addToInput(string) {
    input.value += string;
}

//
//clear 
//
clearButton.addEventListener("click", clearAll);

function clearInput() {
    input.value = "";
}
function clearOutput() {
    output.innerHTML = "";
}

function clearAll() {
    clearInput();
    clearOutput();
}

//
//validate input
//
const checkButton = document.getElementById("check-btn");

checkButton.addEventListener("click", () => {    
    evaluate(input.value);
    }
);

function evaluate(string) {
    if(string === "") {
        alert("Please provide a phone number");
        return
    } else if (isValid(string)) {
        output.innerHTML = `Valid US number: ${input.value}`;
        clearInput();
    } else {
        output.innerHTML = `Invalid US number: ${input.value}`;
        clearInput();
    }
}

function isValid(string) {
    return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(string);
}