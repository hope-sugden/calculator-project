// when you click the buttons they should show in the output.
// when you add a symbol it should show instead of the first number. 
// the second number will show instead of the symbol.
// when equals is pressed, the calcualtion is completed and the answer is shown in the output.

const display = document.getElementById("display");
const button1 = document.getElementById("one");

button1.addEventListener("click", () => {
console.log(button1.innerHTML);
display.innerHTML += 1;
})



const button2 = document.getElementById("two");

button2.addEventListener("click", () => {
    console.log(button2.innerHTML);
    display.innerHTML += 2;
})


const button3 = document.getElementById("three");

button3.addEventListener("click", () => {
    console.log(button3.innerHTML);
    display.innerHTML += 3;
})


const button4 = document.getElementById("four");

button4.addEventListener("click", () => {
    console.log(button4.innerHTML);
    display.innerHTML += 4;
})


const button5 = document.getElementById("five");

button5.addEventListener("click", () => {
    console.log(button5.innerHTML);
    display.innerHTML += 5;
})


const button6 = document.getElementById("six");

button6.addEventListener("click", () => {
    console.log(button6.innerHTML);
    display.innerHTML += 6;
})


const button7 = document.getElementById("seven");

button7.addEventListener("click", () => {
    console.log(button7.innerHTML);
    display.innerHTML += 7;
})


const button8 = document.getElementById("eight");

button8.addEventListener("click", () => {
    console.log(button8.innerHTML);
    display.innerHTML += 8;
})


const button9 = document.getElementById("nine");

button9.addEventListener("click", () => {
    console.log(button9.innerHTML);
    display.innerHTML += 9;
})


const button0 = document.getElementById("zero");

button0.addEventListener("click", () => {
    console.log(button0.innerHTML);
    display.innerHTML += 0;
})


const buttonX = document.getElementById("multiply");

buttonX.addEventListener("click", () => {
    console.log(buttonX.innerHTML);
    display.innerHTML += "*";
})


const buttonSubtract = document.getElementById("subtract");

buttonSubtract.addEventListener("click", () => {
    console.log(buttonSubtract.innerHTML);
    display.innerHTML += "-";
})

const buttonPlus = document.getElementById("plus");

buttonPlus.addEventListener("click", () => {
    console.log(buttonPlus.innerHTML);
    display.innerHTML += "+";
})


const buttonPercent = document.getElementById("percent");
const operators = ["+","-","*","/"]
let currentOperator = ""

buttonPercent.addEventListener("click", () => {
    display.innerHTML += "%";
    operators.forEach(operator => {
        if (display.innerHTML.includes(operator)) {
            currentOperator = operator;
        }
    }) 
    const displayArray = display.innerHTML.split(currentOperator);
    console.log(displayArray);
    if(currentOperator == "+") {
        return result.innerHTML = (parseFloat(displayArray[0]) * parseFloat(displayArray[1])/100) + (parseFloat(displayArray[0]));
      }
    
      else if(currentOperator == "-"){
          return result.innerHTML = (parseFloat(displayArray[0]) * parseFloat(displayArray[1])/100) - (parseFloat(displayArray[0]));
      }
    
      else if(currentOperator == "*") {
          return result.innerHTML = parseFloat(displayArray[0]) * parseFloat(displayArray[1])/100;
      }
    
      else if(currentOperator == "/") {
          return result.innerHTML = parseFloat(displayArray[0]) / parseFloat(displayArray[1])/100;
      }
      
      else {
          alert("calculation not recognised!")
      }

})


const buttonDivide = document.getElementById("divide");

buttonDivide.addEventListener("click", () => {
    console.log(buttonDivide.innerHTML);
    display.innerHTML += "/";
})

const buttonDecimal = document.getElementById("dot");

buttonDecimal.addEventListener("click", () => {
    console.log(buttonDecimal.innerHTML);
    display.innerHTML += ".";
}) 

const buttonClear = document.getElementById("clear");

buttonClear.addEventListener("click", () => {
    display.innerHTML = "";
    result.innerHTML = "";
})

                            const buttonSign = document.getElementById("sign");

                            buttonSign.addEventListener("click",() => {
                                const displayArray = display.innerHTML.split(currentOperator);
                                parseFloat(displayArray[displayArray.length])
                                let changeSign = displayArray.splice(displayArray.length,1,(displayArray.length * (-1)));
                                return changeSign = display.innerHTML;
                            })

const buttonEquals = document.getElementById("equals");
const result = document.getElementById("result")

buttonEquals.addEventListener("click", (event) => {
    operators.forEach(operator => {
        if (display.innerHTML.includes(operator)) {
          console.log(operator);
            currentOperator = operator;
        }
    }) 
const displayArray = display.innerHTML.split(currentOperator);
console.log(displayArray);
  if(currentOperator == "+") {
    return result.innerHTML = parseFloat(displayArray[0]) + parseFloat(displayArray[1]);
  }

  else if(currentOperator == "-"){
      return result.innerHTML = parseFloat(displayArray[0]) - parseFloat(displayArray[1]);
  }

  else if(currentOperator == "*") {
      return result.innerHTML = parseFloat(displayArray[0]) * parseFloat(displayArray[1]);
  }

  else if(currentOperator == "/") {
      return result.innerHTML = parseFloat(displayArray[0]) / parseFloat(displayArray[1]);
  }
  
  else {
      alert("calculation not recognised!")
  }
  
})
