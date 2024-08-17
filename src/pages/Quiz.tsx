import Button from "../components/Button";
import Clock from "../components/Clock";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import questions from "../questions";
import QuizCard from "../components/QuizCard";
import ArrowRight from "../components/ArrowRight";

interface AnswerData {
  question: number;
  isCorrect: boolean;
}

export default function Quiz(): JSX.Element {

  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [dataScore, setDataScore] = useState<AnswerData[]>([]);
  const [animate, setAnimate] = useState(false);


  const prevBtn = () => {
    localStorage.removeItem('name');
    navigate('/');
  };

  const nextQuestion = () => {
    console.log("Next Question", isAnswered);
    if (!isAnswered) return;
    setAnimate(true);
    setTimeout(() => {
      setQuestionIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= questions.length) {
          navigate("/result", { state: { dataScore } });
          return prevIndex;
        }
        setIsAnswered(false);
        return nextIndex;
      });
      setAnimate(false);
    }, 300);
  };

  const updateScore = (isCorrect: boolean) => {
    setDataScore((prevData) => [
      ...prevData,
      {
        question: questionIndex,
        isCorrect: isCorrect,
      },
    ]);
    setIsAnswered(true);
    console.log("Score: ", dataScore);
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
            key={questionIndex}
            question={questions[questionIndex]}
            index={questionIndex + 1}
            nextQuestion={nextQuestion}
            updateScore={updateScore}
            isAnswered={isAnswered}
          />
        </div>
      </div>
    </div>
  );
}
