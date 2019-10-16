import React from "react";

function Question(props) {
  const quiz=[
    { 
      question: '2+2=?',
      answer: [1,2,3,4],
      answerTrue: 2
    }
    
  ]
  return (
    <div className="Body">
      <div className="Question">
        What gets logged when I try to log fetch?
      </div>
      <div className="PossibleAnwsers">
        <div className="Anwser">
          <div className="AnwserIndex">A</div>
          <div className="AnwserContent">True false</div>
        </div>
        <div className="Anwser">
          <div className="AnwserIndex">B</div>
          <div className="AnwserContent">True false</div>
        </div>
        <div className="Anwser">
          <div className="AnwserIndex">C</div>
          <div className="AnwserContent">True false</div>
        </div>
        <div className="Anwser">
          <div className="AnwserIndex">D</div>
          <div className="AnwserContent">True false</div>
        </div>
      </div>
    </div>
  )
}

export default Question;
