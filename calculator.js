// Selectors for all buttons
const numberBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll("#num-operator");
const allClearBtn = document.querySelector("#all-clear");
const deleteBtn = document.querySelector("#delete");
const equalBtn = document.querySelector("#equal-btn");
const outputText = document.querySelector(".answer");

//Calculator Class
class Calculator {
  constructor(outputText) {
    this.outputText = outputText;
    this.clear();
  }

  clear() {
    this.output = '';
    this.operator = undefined;
  }

  delete() {

  }

  appendNum(number) {
    this.output = this.output + number;
  }

  selectOperator(operator) {

  }

  operation() {

  }

  updateDisplay() {
    this.outputText.innerText = this.output;
  }
}

// Create a new calculator class
const calc = new Calculator(outputText);

// Event Listeners
numberBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
    calc.appendNum(btn.innerText);
    calc.updateDisplay();
	});
});

allClearBtn.addEventListener('click', (btn) => {
  calc.clear();
  calc.updateDisplay();
});