import Button from "../components/Button";
import Clock from "../components/Clock";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import questions from "../questions";
import QuizCard from "../components/QuizCard";
import ArrowRight from "../components/ArrowRight";

export default function Quiz(): JSX.Element {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const prevBtn = () => {
    localStorage.removeItem('name');
    navigate('/');
  };

  const nextQuestion = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= questions.length) {
          navigate('/results');
        }
        return nextIndex;
      });
      setAnimate(false);
    }, 300);
  };

  return (
    <div className="content flex flex-col p-4 md:p-8">
      <header className="flex justify-between items-center h-[20vh]">
        <Button
          className="flex justify-between items-center gap-4 bg-btnQuiz-variant text-text-secondary"
          event={prevBtn}
        >
          <ArrowRight width="30" />
          Back
        </Button>
        <Clock />
      </header>
      <div
        className={`m-4 flex justify-center items-center h-[70vh] transition-transform duration-300 ${animate ? 'animate-slide-out' : ''
          }`}
      >
        <div className="w-[70vw] md:w-1/2">
          <QuizCard
            key={currentQuestionIndex}
            question={questions[currentQuestionIndex]}
            index={currentQuestionIndex + 1}
            nextQuestion={nextQuestion}
          />
        </div>
      </div>
    </div>
  );
}
