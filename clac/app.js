let outputScreen = document.getElementById("div-screen");
let one = document.getElementById("div-1");
let two = document.getElementById("div-2");
let three = document.getElementById("div-3");
let four = document.getElementById("div-4");
let five = document.getElementById("div-5");
let six = document.getElementById("div-6");
let seven = document.getElementById("div-7");
let eight = document.getElementById("div-8");
let nine = document.getElementById("div-9");
let plus = document.getElementById("div-plus");
let zero = document.getElementById("div-0");
let sub = document.getElementById("div-min");
let mul = document.getElementById("div-mul");
let equal = document.getElementById("div-eq");
let reset = document.getElementById("div-c");
let slash = document.getElementById("div-slash");
let expression = "";

one.addEventListener("click", () => {
    outputScreen.textContent += "1";
    expression += "1";
});
two.addEventListener("click", () => {
    outputScreen.textContent += "2";
    expression += "2";
});
three.addEventListener("click", () => {
    outputScreen.textContent += "3";
    expression += "3";
});
four.addEventListener("click", () => {
    outputScreen.textContent += "4";
    expression += "4";
});
five.addEventListener("click", () => {
    outputScreen.textContent += "5";
    expression += "5";
});
six.addEventListener("click", () => {
    outputScreen.textContent += "6";
    expression += "6";
});
seven.addEventListener("click", () => {
    outputScreen.textContent += "7";
    expression += "7";
});
eight.addEventListener("click", () => {
    outputScreen.textContent += "8";
    expression += "8";
});
nine.addEventListener("click", () => {
    outputScreen.textContent += "9";
    expression += "9";
});
zero.addEventListener("click", () => {
    outputScreen.textContent += "0";
    expression += "0";
});

plus.addEventListener("click", () => {
    outputScreen.textContent += "+";
    expression += "+";
});

sub.addEventListener("click", () => {
    outputScreen.textContent += "-";
    expression += "-";
});

mul.addEventListener("click", () => {
    outputScreen.textContent += "*";
    expression += "*";
});

slash.addEventListener("click", () => {
    outputScreen.textContent += "/";
    expression += "/";
});

equal.addEventListener("click", () => {
    try {
        total = eval(expression);
        outputScreen.textContent = total;
        expression = total.toString();  // to allow further calculations with the result
    } catch (e) {
        outputScreen.textContent = "Error";
        expression = "";
    }
});

reset.addEventListener("click", () => {
    outputScreen.textContent = "";
    expression = "";
});
