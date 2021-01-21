// Selectors for all buttons
const numberBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll("#num-operator");
const allClearBtn = document.querySelector("#all-clear");
const deleteBtn = document.querySelector("#delete");
const equalBtn = document.querySelector("#equal-btn");
const prevOutputText = document.querySelector("#prev-output");
const currOutputText = document.querySelector("#curr-output");
const percentBtn = document.querySelector("#percent");

//Calculator Class
class Calculator {
	constructor(prevOutputText, currOutputText) {
		this.prevOutputText = prevOutputText;
		this.currOutputText = currOutputText;
		this.clear();
	}

	clear() {
		this.prevOutput = "";
		this.currOutput = "";
		this.operator = "";
	}

	delete() {}

	appendNum(number) {
		if (number === "." && this.currOutput.includes(".")) {
			return;
		}
		this.currOutput = this.currOutput + number;
	}

	selectOperator(operator) {
		if (this.currOutput === "") {
			return;
		}
		if (this.prevOutput !== "") {
			this.operation();
		}
		this.operator = operator;
		this.prevOutput = this.currOutput;
		this.currOutput = "";
	}

	operation() {
		let result = 0;
		const prevNum = parseFloat(this.prevOutput);
		const currNum = parseFloat(this.currOutput);

		switch (this.operator) {
			case "+":
				result = prevNum + currNum;
				break;
			case "−":
				result = prevNum - currNum;
				break;
			case "×":
				result = prevNum * currNum;
				break;
			case "÷":
				result = prevNum / currNum;
				break;
			default:
				break;
		}
		
		this.prevOutput = "";
		this.currOutput = result;
	}

	updateDisplay() {
		this.currOutputText.innerText = this.currOutput;
		this.prevOutputText.innerText = this.prevOutput + this.operator;
	}
}

// Create a new calculator class
const calc = new Calculator(prevOutputText, currOutputText);

// Event Listeners
numberBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		calc.appendNum(btn.innerText);
		calc.updateDisplay();
	});
});

operatorBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		calc.selectOperator(btn.innerText);
		calc.updateDisplay();
	});
});

allClearBtn.addEventListener("click", (btn) => {
	calc.clear();
	calc.updateDisplay();
});
