function simpleCalculator(){
    let num1 = parseFloat(prompt("enter the first number:"));
    let num2= parseFloat(prompt("enter the second number:"));
    if (isNaN(num1)||isNaN(num2)){
        alert("please enter a number");
        return;
    }
    let result = `Addition: ${num1+num2}\nSubtraction: ${num1-num2}\nMultiplication: ${num1*num2}\nDivision: ${num1/num2}`;
    alert (result);
}