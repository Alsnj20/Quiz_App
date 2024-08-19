import Button from "../components/Button";
import Clock from "../components/Clock";
import QuizCard from "../components/QuizCard";
import ArrowRight from "../components/ArrowRight";
import { Modal } from "../components/Modal";
import questions from "../questions";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export interface AnswerData {
  question: number;
  isCorrect: boolean;
}

export default function Quiz(): JSX.Element {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [dataScore, setDataScore] = useState<AnswerData[]>([]);
  const [animate, setAnimate] = useState(false);
  const [time, setTime] = useState(60); // Tiempo en segundos
  const [showTimeEndModal, setShowTimeEndModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          setShowTimeEndModal(true);
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      setShowTimeEndModal(true);
    }
  }, [time]);

  const handleModalClose = () => {
    navigate("/result", { state: { dataScore } });
  };

  const prevBtn = () => {
    localStorage.removeItem('name');
    navigate('/');
  };

  const nextQuestion = () => {
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
  };

  return (
    <div className="content flex flex-col p-4 md:p-8">
      <header className="flex justify-between
      items-center h-[15vh] md:h-[20vh] gap-4">
        <Button
          className="flex justify-between items-center
          gap-4 bg-btnQuiz-variant text-text-secondary"
          event={prevBtn}
        >
          <ArrowRight width="30" />
          Back
        </Button>
        <Clock time={time} />
      </header>
      <div
        className={`m-4 flex justify-center items-center h-[70vh] transition-transform duration-300 ${animate ? 'animate-slide-out' : ''
          }`}
      >
        <div className="w-[70vw] md:w-full">
          <QuizCard
            key={questionIndex}
            question={questions[questionIndex]}
            totalQuestions={questions.length}
            index={questionIndex + 1}
            nextQuestion={nextQuestion}
            updateScore={updateScore}
            isAnswered={isAnswered}
          />
        </div>
      </div>
      {showTimeEndModal && (
        <Modal
          title="Finished Time!"
          isOpen={showTimeEndModal}
          onClose={handleModalClose}
        >
          <p className="text-center">Your time is up</p>
          <Button
            className="bg-btnQuiz-variant text-text-secondary"
            event={handleModalClose}
          >
            Close
          </Button>
        </Modal>
      )}
    </div>
  );
}
