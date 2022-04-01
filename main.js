// when you click the buttons they should show in the output.
// when you add a symbol it should show instead of the first number. 
// the second number will show instead of the symbol.
// when equals is pressed, the calcualtion is completed and the answer is shown in the output.
const getCurrentOperator = () => {
    operators.forEach(operator => {
        if (display.innerHTML.includes(operator)) {
          console.log(operator);
            currentOperator = operator;
        }
    }) 
}

const calculateEquationResult = () => {
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
}

const calculateEquationDisplay = () => {
    const displayArray = display.innerHTML.split(currentOperator);
    console.log(displayArray);
      if(currentOperator == "+") {
        return display.innerHTML = parseFloat(displayArray[0]) + parseFloat(displayArray[1]);
      }
    
      else if(currentOperator == "-"){
          return display.innerHTML = parseFloat(displayArray[0]) - parseFloat(displayArray[1]);
      }
    
      else if(currentOperator == "*") {
          return display.innerHTML = parseFloat(displayArray[0]) * parseFloat(displayArray[1]);
      }
    
      else if(currentOperator == "/") {
          return display.innerHTML = parseFloat(displayArray[0]) / parseFloat(displayArray[1]);
      }
      
      else {
          alert("calculation not recognised!")
      }
}

const display = document.getElementById("display");
const button1 = document.getElementById("one");

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.innerHTML += button.innerHTML
    })
})

const buttonX = document.getElementById("multiply");

buttonX.addEventListener("click", () => {
    console.log("CURRENT OPERATOR =" + currentOperator);
    getCurrentOperator();
    console.log("CURRENT OPERATOR =" + currentOperator);
    operators.forEach (operator => {
        if(display.innerHTML.includes(operator)) {
            console.log("This operator exists" + operator);
               calculateEquationDisplay();  
               return;
        }
    })
    display.innerHTML+= "*";
})


const buttonSubtract = document.getElementById("subtract");

buttonSubtract.addEventListener("click", () => {
    console.log(buttonSubtract.innerHTML);
    getCurrentOperator();
    operators.forEach (operator => {
        if(display.innerHTML.includes(operator)) {
            console.log("This operator exists" + operator);
               calculateEquationDisplay();  
               return;
        }
    })
    display.innerHTML+= "-";
})

const buttonPlus = document.getElementById("plus");

buttonPlus.addEventListener("click", () => {
    console.log(buttonPlus.innerHTML);
    getCurrentOperator();
    operators.forEach (operator => {
        if(display.innerHTML.includes(operator)) {
            console.log("This operator exists" + operator);
               calculateEquationDisplay();  
               return;
        }
    })
    display.innerHTML+= "+";
})


const buttonPercent = document.getElementById("percent");
const operators = ["+","-","*","/"]
let currentOperator = ""

buttonPercent.addEventListener("click", () => {
    display.innerHTML += "%";
    getCurrentOperator();
    
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
    getCurrentOperator();
    operators.forEach (operator => {
        if(display.innerHTML.includes(operator)) {
            console.log("This operator exists" + operator);
               calculateEquationDisplay();  
               return;
        }
    })
    display.innerHTML+= "/";
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
    getCurrentOperator();
    const displayArray = display.innerHTML.split(currentOperator);
    parseFloat(displayArray[displayArray.length])

    if(displayArray[1].charAt(0) == "-" ) {
        const positiveNumber = Math.abs(displayArray[1])
        console.log(positiveNumber);
        displayArray.splice(1,1,positiveNumber)
    }

    else {
        const negativeNumber =  "-".concat(displayArray[1])
        displayArray[1] = negativeNumber
        console.log(displayArray);
    }
displayArray.splice(1,0,currentOperator);
display.innerHTML = displayArray.join("");
})

const buttonEquals = document.getElementById("equals");
const result = document.getElementById("result")

buttonEquals.addEventListener("click", (event) => {
    getCurrentOperator();
    calculateEquationResult();  
})
