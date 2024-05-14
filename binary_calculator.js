var expression = "";

press = (num) => {
  if (/[01]/.test(num)) {
    expression += num;
    userInput.value = expression;
  }
}

equal = () => {
  if (expression) {
    let decimalResult = parseInt(expression, 2); // converts the binary into decimal
    userInput.value = decimalResult;
    expression = ""; // resets the  expression
  }
}