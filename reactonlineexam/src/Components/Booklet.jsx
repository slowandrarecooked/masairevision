import { useState } from "react";
import QuestionCard from "./QuestionCard";

const Booklet = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const getdata = async () => {
    let result = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
    );
    let data = await result.json();
    console.log(data.data);
    setQuestions(data.data);
  };
  let handleScore = () => {
    setScore(score + 1);
  };
  let handleEnd = () => {
    setQuestions([]);
    setScore(0);
  };
  return (
    <div data-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}
      {questions.length == 0 ? (
        <div className="welcome-div">
          <h1>To begin the exam, click on the 'Start Exam' button below</h1>
          <button onClick={getdata}>Start Exam</button>
        </div>
      ) : (
        <div className="questions-container">
          {/* Append score and question card components here */}
          <button onClick={handleEnd}>End Exam</button>
          <h3>Score:{score}</h3>
          {questions?.map((item) => {
            return (
              <QuestionCard
                item={item}
                key={item.id}
                handleScore={handleScore}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Booklet;
