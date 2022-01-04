const buttons = document.querySelectorAll("button");
const userInput = document.querySelector("p");
const calculate = document.querySelector(".eval");
const clear = document.querySelector(".clear");
const symbols = ["+", "-", "/", "*"];

let equation = [];

const getCalculations = () => {
  symbols.forEach((symbol) => {
    if (equation.includes(symbol)) {
      userInput.innerHTML = eval(equation.join(""));
    }
  });
};

const displayUserValue = (UserValue) => {
  if (UserValue.length > 0) {
    userInput.innerHTML = UserValue.join("");
  }
};

const getUserValue = (e) => {
  equation.push(e.target.innerHTML);
  displayUserValue(equation);
};

const clearAll = () => {
  equation = [];
  userInput.innerHTML = " ";
};

buttons.forEach((element) => {
  element.addEventListener("click", getUserValue);
});

calculate.addEventListener("click", getCalculations);

clear.addEventListener("click", clearAll);
