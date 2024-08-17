import Button from "./Button";
import { useState } from "react";

interface QuizCardProps {
  index: number;
  question: {
    question: string;
    answers: {
      text: string;
      correct: boolean;
    }[];
  };
  nextQuestion: () => void;
  updateScore: (isCorrect: boolean) => void;
  isAnswered: boolean;
}

export default function QuizCard({ index, question, nextQuestion, updateScore, isAnswered }: QuizCardProps): JSX.Element {

  const [indexAnswer, setIndexAnswer] = useState(-1);


  const checkAnswer = (answerCorrect: boolean, index: number) => {
    if (isAnswered) return;
    setIndexAnswer(index);
    updateScore(answerCorrect);
  };

  const changeColor = (indexMap: number) => {
    if (indexAnswer === indexMap) {
      console.log(question.answers[indexMap].correct);
      return question.answers[indexMap].correct ? "btnCorrect" : "btnIncorrect";
    }
    return "white";
  };

  return (
    <div className="cardQuiz shadow-lg bg-card before:bg-card before:shadow-md flex flex-col gap-2 p-4 md:p-20">
      <h4 className="text-4xl font-semibold text-center text-text-tertiary">
        Question {index}
      </h4>
      <h2 className="text-5xl text-center font-semibold">{question.question}</h2>
      <p>Select one:</p>
      <div className="flex flex-col justify-center items-center gap-4">
        {question.answers.map((answer, i) => (
          <div
            key={i}
            className={`rounded-lg p-2 px-4 w-full shadow-sm pulse bg-${changeColor(i)}`}
            onClick={() => checkAnswer(answer.correct, i)}
          >
            <p>{answer.text}</p>
          </div>
        ))}
        <Button className="bg-btnQuiz-variant text-text-primary w-max"
          event={nextQuestion}
          disabled={!isAnswered}
        >
          Next
        </Button>
      </div>
    </div>
  );
}