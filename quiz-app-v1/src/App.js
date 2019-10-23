import React from "react";
import "./App.css";
import Question from "./components/Question";
import Status from "./components/Status";
import Result from "./components/Result";
//Use class ES6 để định nghĩa component
class App extends React.Component {
  //Khai báo giá trị, nơi duy nhất để gán giá trị cho state là hàm tạo constructor
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [
        {
          question: "Câu 1: 1 + 1 = ?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "2"
        },
        {
          question: "Câu 2: 1 + 2 = ?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "3"
        },
        {
          question: "Câu 3: 1 + 3 = ?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "4"
        },
        {
          question: "Câu 4: 1 + 0 = ?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "1"
        }
      ],
      currentQuestion: 1,
      thinkingTime: 5,
      scoreQuiz: 0,
      isDone: false
    };
  }
  //Hàm next question
  onAnswer(answer, answerTrue) {
    console.log(answer, answerTrue);
    if (answer===answerTrue) {
      this.setState({
        scoreQuiz: this.state.scoreQuiz+1
      });
    };
    if(this.state.currentQuestion < this.state.quizzes.length){
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        thinkingTime: 5,
      });
    } 
    else {
      console.log("Số điểm của bạn là: "+ this.state.scoreQuiz);
      //Dừng hàm đếm thời gian
      clearInterval(this.myInterval)
      this.setState({
        isDone: true
      });
    }
  }
  //Hàm đếm thời gian sử dụng Interval
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const thinkingTime = this.state.thinkingTime;
      if (thinkingTime > 0) {
        this.setState(({ thinkingTime }) => ({
          thinkingTime: thinkingTime - 1
        }));
      }
      else if (this.state.currentQuestion < this.state.quizzes.length){
        this.setState({
          currentQuestion: this.state.currentQuestion + 1,
          thinkingTime: 5
        });
      }
      else{
        console.log("Số điểm của bạn là: "+ this.state.scoreQuiz);
        //Dừng hàm đếm thời gian
        clearInterval(this.myInterval)
        this.setState({
          isDone: true
        });
      }
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <div className="box">
          {this.state.isDone===false && <Status
            totalQuestion={this.state.quizzes.length}
            currentQuestion={this.state.currentQuestion}
            timer={this.state.thinkingTime}
            isDone={this.state.isDone}
          />}
          {this.state.isDone===false &&<Question
            quizzes={this.state.quizzes}
            currentQuestion={this.state.currentQuestion}
            onAnswer={this.onAnswer.bind(this)}
            isDone={this.state.isDone}
          />}
          {this.state.isDone===true && <Result 
            totalQuestion={this.state.quizzes.length}
            scoreQuiz={this.state.scoreQuiz}
            isDone={this.state.isDone}
          />}
        </div>
      </div>
    );
  }
}

export default App;
