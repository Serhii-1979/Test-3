import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Answer from "./Answer";
import Star from "./Star";
import ThumbUp from "./ThumbUp";
import { useNavigate } from "react-router-dom";
import "./MathQuiz.css";

const MathQuiz = () => {
  const operators = ["+", "-", "*", "/"];
  const [points, setPoints] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operator, setOperator] = useState("+");
  const [showThumbUp, setShowThumbUp] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [starLevels, setStarLevels] = useState([false, false, false]);
  const [showVictoryText, setShowVictoryText] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    generateQuestion();
  }, []);

  useEffect(() => {
    handleStarAnimations(points);
  }, [points]);

  const generateQuestion = () => {
    const newOperator = operators[Math.floor(Math.random() * operators.length)];
    let newA = Math.floor(Math.random() * 10);
    let newB = Math.floor(Math.random() * 10);

    if (newOperator === "-" && newA < newB) {
      [newA, newB] = [newB, newA];
    }

    if (newOperator === "/") {
      newB = newB === 0 ? 1 : newB;
      newA = newA * newB;
    }

    setA(newA);
    setB(newB);
    setOperator(newOperator);
  };

  const handleStarAnimations = (points) => {
    let starIndex = null;
    if (points === 5) starIndex = 0;
    if (points === 10) starIndex = 1;
    if (points === 15) starIndex = 2;

    if (starIndex !== null) {
      const newStarLevels = [...starLevels];
      newStarLevels[starIndex] = true;
      setStarLevels(newStarLevels);
      setShowThumbUp(true);
      setIsYellow(true);

      setTimeout(() => {
        setShowThumbUp(false);
        setIsYellow(false);
      }, 2000);
    }

    if (points === 16) {
      setShowVictoryText(true);
      setTimeout(() => {
        setShowVictoryText(false);
        navigate("/end");
      }, 4000); // Показываем текст 4 секунды (1 сек на появление, 2 сек на показ, 1 сек на исчезновение)
    }
  };

  const updatePoints = (correct) => {
    if (correct) {
      setPoints(points + 1);
      triggerConfetti();
    } else {
      setPoints(points - 1);
    }
    generateQuestion();
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 300,
      startVelocity: 40,
      spread: 360,
      origin: {
        x: 0.5,
        y: 0.5,
      },
    });
  };

  return (
    <div className="container">
      <div className="container_main-1">
        <div className="container_main-2">
          <div className="container_main-3">
            <div className="quiz-container">
              <div className="stars">
                <Star active={starLevels[0]} />
                <Star active={starLevels[1]} />
                <Star active={starLevels[2]} />
              </div>
              <h2>Ваши очки: {points}</h2>
              <p>
                {a} {operator} {b} = ?
              </p>
              <Answer
                a={a}
                b={b}
                operator={operator}
                updatePoints={updatePoints}
              />
              {showThumbUp && <ThumbUp isYellow={isYellow} />}
              {showVictoryText && <div className="victory-text">ТЫ ПОБЕДИЛ!</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathQuiz;
