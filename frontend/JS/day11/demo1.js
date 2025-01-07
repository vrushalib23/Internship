function addition()
{
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);

    let res =  n1+n2;
    let display = document.getElementById("result")
  //  display.innerHTML = res;
  display.innerHTML = `<h2>Your result of numbers  ${n1} and ${n2} is : ${res}  </h2> ` ;
}

function subtraction()
{
    let num1 = document.getElementById("input1");
    let num2 = document.getElementById("input2");
 
let n1 = parseInt(num1.value);
let n2 = parseInt(num2.value);

let display = document.getElementById("result");

if (n1 < n2) {
    
    alert("First number is less than the second number.");
} else {
     
    let res = n1 - n2;
    display.innerHTML = `<h2>Your result of subtraction is: ${res}</h2>`;
}

}

function onDataChange()
{
   let name = document.getElementById("myname");
   name.style.backgroundColor="red";
   name.style.color="white";

}