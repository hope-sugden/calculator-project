// when you click the buttons they should show in the output.
// when you add a symbol it should show instead of the first number. 
// the second number will show instead of the symbol.
// when equals is pressed, the calcualtion is completed and the answer is shown in the output.

const display = document.getElementById("display");
const button1 = document.getElementById("one");

button1.addEventListener("click", () => {
console.log(button1.innerHTML);
display.innerHTML += button1.innerHTML;
})



const button2 = document.getElementById("two");

button2.addEventListener("click", () => {
    console.log(button2.innerHTML);
    display.innerHTML += button2.innerHTML;
})


const button3 = document.getElementById("three");

button3.addEventListener("click", () => {
    console.log(button3.innerHTML);
    display.innerHTML += button3.innerHTML;
})


const button4 = document.getElementById("four");

button4.addEventListener("click", () => {
    console.log(button4.innerHTML);
    display.innerHTML += button4.innerHTML;
})


const button5 = document.getElementById("five");

button5.addEventListener("click", () => {
    console.log(button5.innerHTML);
    display.innerHTML += button5.innerHTML;
})


const button6 = document.getElementById("six");

button6.addEventListener("click", () => {
    console.log(button6.innerHTML);
    display.innerHTML += button6.innerHTML;
})


const button7 = document.getElementById("seven");

button7.addEventListener("click", () => {
    console.log(button7.innerHTML);
    display.innerHTML += button7.innerHTML;
})


const button8 = document.getElementById("eight");

button8.addEventListener("click", () => {
    console.log(button8.innerHTML);
    display.innerHTML += button8.innerHTML;
})


const button9 = document.getElementById("nine");

button9.addEventListener("click", () => {
    console.log(button9.innerHTML);
    display.innerHTML += button9.innerHTML;
})


const button0 = document.getElementById("zero");

button0.addEventListener("click", () => {
    console.log(button0.innerHTML);
    display.innerHTML += button0.innerHTML;
})


const buttonX = document.getElementById("multiply");

buttonX.addEventListener("click", () => {
    console.log(buttonX.innerHTML);
    display.innerHTML += buttonX.innerHTML;
})


const buttonSubtract = document.getElementById("subtract");

buttonSubtract.addEventListener("click", () => {
    console.log(buttonSubtract.innerHTML);
    display.innerHTML += buttonSubtract.innerHTML;
})

const buttonPlus = document.getElementById("plus");

buttonPlus.addEventListener("click", () => {
    console.log(buttonPlus.innerHTML);
    display.innerHTML += buttonPlus.innerHTML;
})


const buttonPercent = document.getElementById("percent");

buttonPercent.addEventListener("click", () => {
    console.log(buttonPercent.innerHTML);
    display.innerHTML += buttonPercent.innerHTML;
})

const buttonDivide = document.getElementById("divide");

buttonDivide.addEventListener("click", () => {
    console.log(buttonDivide.innerHTML);
    display.innerHTML += buttonDivide.innerHTML;
})

const buttonDecimal = document.getElementById("dot");

buttonDecimal.addEventListener("click", () => {
    console.log(buttonDecimal.innerHTML);
    display.innerHTML += buttonDecimal.innerHTML;
}) 

const buttonEquals = document.getElementById("equals");

buttonEquals.addEventListener("click", () => {
    return display;
    display.innerHTML += buttonEquals.innerHTML;
})


const buttonClear = document.getElementById("clear");

buttonClear.addEventListener("click", () => {
    display.innerHTML = "";
})