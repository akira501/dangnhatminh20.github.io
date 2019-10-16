import React, { useState } from "react";
import "./App.css";

import Status from "./components/Status";
import Question from "./components/Question";

function App() {
  const [question, setQuestion] = useState("1 = 1 = ?");

  function changeQuestion() {
    setQuestion("1 + 2 = ?");
  }

  return (
    <div className="App container-fluid">
      <div className="Box">
        <Status/>
        <Question/>
        <div className="Footer">
          <button className="Button ButtonSmall btn btn-secondary">
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
