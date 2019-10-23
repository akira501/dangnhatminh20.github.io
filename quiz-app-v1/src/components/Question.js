import React from "react";

// function selectQuestion(answer, answerTrue) {
//   if (answer === answerTrue) {
//     alert("Chính xác!");
//   } else {
//     alert("Không chính xác!");
//   }
// }

function Question({ quizzes, currentQuestion, onAnswer }) {
  const quiz = quizzes[currentQuestion - 1];
  return (
    <div className="main_Area">
      <div className="question">{quiz.question}</div>
      <div className="list_Answer">
        {/* <div className="answer">
              <div className="answer_Index">A</div>
              <div className="answer_Content">2</div>
            </div>
            <div className="answer">
              <div className="answer_Index">B</div>
              <div className="answer_Content">3</div>
            </div>
            <div className="answer">
              <div className="answer_Index">C</div>
              <div className="answer_Content">4</div>
            </div>
            <div className="answer">
              <div className="answer_Index">D</div>
              <div className="answer_Content">5</div>
            </div> */}
        {quiz.answers.map((answer, index) => (
          <div
            className="answer"
            key={index}
            onClick={() => onAnswer(answer, quiz.answerTrue)}
          >
            <div className="answer_Index">{index + 1}</div>
            <div className="answer_Content">{answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
