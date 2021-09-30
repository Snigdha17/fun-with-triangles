const submitButton = document.querySelector("#submit-answer-btn");
const rightAnswers = [
  "45",
  "right angled",
  "scalene",
  "equilateral",
  "one right angle",
];
const outputArea = document.querySelector("#output");

submitButton.addEventListener("click", checkAnswers);

function checkAnswers() {
  var quizForm = document.querySelector(".quiz-form");
  clearMessage();
  let score = 0;
  let index = 0;
  var count = 0;
  const formResults = new FormData(quizForm);
  //returns array of key-value pairs,
  // key is name of radio button, value is checked value of radio button
  for (let value of formResults.values()) {
    //for-of construct
    count++;
    if (value == rightAnswers[index]) {
      score++;
    }
    index++;
  }

  if (count != rightAnswers.length) {
    setOutputText("Please answer all questions to view your score");
  } else {
    setOutputText("Your score is: " + score);
  }
}

function clearMessage() {
  outputArea.innerText = "";
}

function setOutputText(text) {
  outputArea.innerText = text;
}
