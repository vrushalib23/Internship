function addition() {
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let res = n1 + n2;
    let display = document.getElementById("result");
    display.innerHTML = `<h2>  Addition is: ${res}</h2>`;
}

function subtraction() {
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let display = document.getElementById("result");

    if (n1 < n2) {
        alert("First number is less than the second number..");
    } else {
        let res = n1 - n2;
        display.innerHTML = `<h2> Subtraction is: ${res}</h2>`;
    }
}

function multiplication() {
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let res = n1 * n2;
    let display = document.getElementById("result");
    display.innerHTML = `<h2> Multiplication is: ${res}</h2>`;
}

function division() {
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let display = document.getElementById("result");

    if (n2 === 0) {
        alert("Cannot divide by zero.");
    } else {
        let res = n1 / n2;
        display.innerHTML = `<h2> Division is: ${res}</h2>`;
    }
}

 