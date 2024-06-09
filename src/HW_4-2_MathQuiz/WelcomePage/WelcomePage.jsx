import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  const handleExit = () => {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      window.close();
    }
  };

  return (
    <div className="welcome-container">
      <div className="background"></div>
      <div className="welcome-container_main">
        <h1 className="welcome-container_text">Проверь свои знания</h1>
        <div className="welcome-container_btn">       
        <button onClick={handleStart} className="start-button">
          начать
        </button>
        <button onClick={handleExit} className="exit-button">
          выйти
        </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
