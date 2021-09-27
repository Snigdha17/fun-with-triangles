const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputArea = document.querySelector("#output");

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const hypotenuse = Math.sqrt(sumOfSquares);
  outputArea.innerText = "Hypotenuse is: " + hypotenuse;
}

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a ** 2 + b ** 2;
  return sumOfSquares;
}
