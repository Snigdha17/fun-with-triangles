const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answer-btn");
const rightAnswers = ["45", "right angled"];
const outputArea = document.querySelector("#output");

submitButton.addEventListener("click", checkAnswers);

function checkAnswers() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  //returns array of key-value pairs,
  // key is name of radio button, value is checked value of radio button
  for (let value of formResults.values()) {
    //for-of construct
    if (value == rightAnswers[index]) {
      score++;
    }
    index++;
  }

  outputArea.innerText = "Your score is: " + score;
}
