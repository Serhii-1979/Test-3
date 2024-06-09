
import React, { useState } from "react";
import "./MathQuiz.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button className="btn-andere" onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("0")}>0</button>      
        <button className="btn-andere" onClick={() => handleButtonClick("-")}>-</button>
        <button className="btn-andere" onClick={() => handleButtonClick("*")}>*</button>
       
        <button className="" onClick={handleClear}>C</button>
        <button className="btn-andere" onClick={() => handleButtonClick("/")}>/</button>
        <button className="button-equal" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
