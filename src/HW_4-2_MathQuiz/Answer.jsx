import React, { useState } from "react";
import Calculator from "./Calculator";
import "./MathQuiz.css";

const Answer = ({ a, b, operator, updatePoints }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);
  const [text, setText] = useState("Помощь");

  const handleSubmit = (event) => {
    event.preventDefault();
    let correctAnswer;
    switch (operator) {
      case "+":
        correctAnswer = a + b;
        break;
      case "-":
        correctAnswer = a - b;
        break;
      case "*":
        correctAnswer = a * b;
        break;
      case "/":
        correctAnswer = a / b;
        break;
      default:
        correctAnswer = null;
    }
    const correct = parseFloat(userAnswer) === correctAnswer;
    updatePoints(correct);
    setUserAnswer("");
  };

  const toggleCalculator = () => {
    setShowCalculator((prevShowCalculator) => {
      const newShowCalculator = !prevShowCalculator;
      setText(newShowCalculator ? "Закрыть" : "Помощь");
      return newShowCalculator;
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Введите ответ"
          step="any"
        />
        <button className="btn" type="submit">
          Проверить
        </button>
        <button className="help btn" type="button" onClick={toggleCalculator}>
          {text}
        </button>
      </form>
      {showCalculator && <Calculator />}
    </div>
  );
};

export default Answer;
