const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputArea = document.querySelector("#output");

function isTriangle() {
  const angleSum = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
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
