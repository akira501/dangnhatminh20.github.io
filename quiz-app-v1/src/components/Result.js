import React from "react";

function Result(props) {
    return(
        <div className="result_area">
            Kết quả: {props.scoreQuiz} / {props.totalQuestion}
        </div>
    )
}

export default Result;