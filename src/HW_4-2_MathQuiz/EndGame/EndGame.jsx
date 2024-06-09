import React from "react";
import { useNavigate } from "react-router-dom";
import "./EndGame.css";

const EndGame = () => {
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/quiz");
  };

  const handleExit = () => {
    navigate("/"); // Или используйте любой метод для выхода
  };

  return (
    <>
      <div className="endgame-container">
        <div className="endgame-container-1">
          <div className="endgame-container-2">
            <div className="endgame-container-h2">
              <h2 className="endgame-text">Игра завершена</h2>
            </div>
            <div className="endgame_btn">
              <button onClick={handleNewGame} className="endgame-button">
                Новая игра
              </button>
              <button onClick={handleExit} className="endgame-button">
                Выход
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndGame;
