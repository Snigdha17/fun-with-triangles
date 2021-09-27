const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputArea = document.querySelector("#output");

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
  var sides = document.querySelectorAll(".side-input");

  clearMessage();

  const input1 = sides[0].value;
  const input2 = sides[1].value;

  if (!validateInputs(input1, input2)) {
    outputArea.innerText = "Please enter all inputs";
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
  return input1 && input2;
}

function clearMessage() {
  outputArea.innerText = "";
}
