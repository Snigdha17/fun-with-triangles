const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputArea = document.querySelector("#output");

function isTriangle() {
  var inputs = document.querySelectorAll(".angle-input");

  clearMessage();

  const input1 = inputs[0].value;
  const input2 = inputs[1].value;
  const input3 = inputs[2].value;

  if (!validateInputs(input1, input2, input3)) {
    outputArea.innerText = "Please enter all inputs";
    return;
  }
  const angleSum = calculateSumOfAngles(
    Number(input1),
    Number(input2),
    Number(input3)
  );

  if (angleSum === 180) {
    outputArea.innerText = "It's a triangle!";
  } else {
    outputArea.innerText = "Not a triangle";
  }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

isTriangleBtn.addEventListener("click", isTriangle);

function validateInputs(input1, input2, input3) {
  return input1 && input2 && input3;
}

function clearMessage() {
  outputArea.innerText = "";
}
