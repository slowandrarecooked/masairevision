import { useState } from "react";
import "../App.css";
const QuestionCard = ({ item, handleScore }) => {
  const [showans, setShowans] = useState(false);
  const [clicked, setClicked] = useState(false);
  let { question, correctOptionIndex, options } = item;
  let checkAns = (index) => {
    setClicked(true);
    if (index == correctOptionIndex) handleScore();
  };
  return (
    <div className="question-card">
      {/* add question here */}
      <h3>{question}</h3>

      <div className="options">
        {options.map((op) => {
          return (
            <div data-testid="option">
              <button
                onClick={() => checkAns(options.indexOf(op))}
                className={
                  clicked
                    ? options.indexOf(op) == correctOptionIndex
                      ? "bgGreen"
                      : "bgRed"
                    : null
                }
                disabled={clicked ? true : false}
              >
                {op}
              </button>
            </div>
          );
        })}
      </div>
      <div className="show-ans">
        <button onClick={() => setShowans(!showans)}>
          {showans ? "Hide Ans" : "Show Ans"}
        </button>
        <p>{showans ? options[correctOptionIndex] : null}</p>
      </div>
    </div>
  );
};

export default QuestionCard;
