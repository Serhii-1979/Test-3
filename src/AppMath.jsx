import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import MathQuiz from './HW_4-2_MathQuiz/MathQuiz';
import WelcomePage from './HW_4-2_MathQuiz/WelcomePage/WelcomePage';
import EndGame from './HW_4-2_MathQuiz/EndGame/EndGame';
import './transition.css'; // файл для стилей переходов

const AppMath = () => {
  const location = useLocation();

  return (
    <div className='container'>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={1000}
        >
          <Routes location={location}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/quiz" element={<MathQuiz />} />
            <Route path="/end" element={<EndGame />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

const WrappedAppMath = () => (
  <Router>
    <AppMath />
  </Router>
);

export default WrappedAppMath;
