const areaBtn = document.querySelector("#area-btn");
const outputArea = document.querySelector("#output");

areaBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var sides = document.querySelectorAll(".side-input");

  clearMessage();

  const input1 = sides[0].value;
  const input2 = sides[1].value;

  if (!validateInputs(input1, input2)) {
    outputArea.innerText = "Please enter all inputs";
    return;
  }

  const area = calculateArea(Number(input1), Number(input2));
  outputArea.innerText = "Area is: " + area;
}

function calculateArea(a, b) {
  return 0.5 * a * b;
}

function validateInputs(input1, input2) {
  return input1 && input2;
}

function clearMessage() {
  outputArea.innerText = "";
}
