const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputArea = document.querySelector("#output");

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
  var sides = document.querySelectorAll(".side-input");

  clearMessage();

  const input1 = sides[0].value;
  const input2 = sides[1].value;

  if (!validateInputs(input1, input2)) {
    return;
  }

  const sumOfSquares = calculateSumOfSquares(Number(input1), Number(input2));
  const hypotenuse = Math.sqrt(sumOfSquares);
  outputArea.innerText = `Hypotenuse is ${hypotenuse} \u33A0`;
}

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a ** 2 + b ** 2;
  return sumOfSquares;
}

function validateInputs(input1, input2) {
  if (!input1 || !input2) {
    outputArea.innerText = "Please enter all inputs";
    return false;
  } else if (input1 < 0 || input2 < 0) {
    outputArea.innerText =
      "Triangle sides cannot be negative. Please enter positive values for all sides";
    return false;
  }
  return true;
}

function clearMessage() {
  outputArea.innerText = "";
}
