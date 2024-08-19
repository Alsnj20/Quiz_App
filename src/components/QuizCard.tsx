import Button from "./Button";
import { useState } from "react";
import Card from "./Card";
import Bar from "./Bar";

interface QuizCardProps {
  index: number;
  totalQuestions: number;
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

export default function QuizCard({ index, totalQuestions, question, nextQuestion, updateScore, isAnswered }: QuizCardProps): JSX.Element {

  const [indexAnswer, setIndexAnswer] = useState(-1);

  const progress = (index / totalQuestions) * 100;



  const checkAnswer = (answerCorrect: boolean, index: number) => {
    if (isAnswered) return;
    setIndexAnswer(index);
    updateScore(answerCorrect);
  };

  return (
    <Card color="bg-card">
      <h4 className="text-4xl font-semibold text-center text-text-tertiary">
        Question {index}
      </h4>
      <h2 className="text-5xl text-center font-semibold">{question.question}</h2>
      <Bar width={progress} />
      <p
      >Select one:</p>
      <div className="flex flex-col justify-center items-center gap-4">
        {question.answers.map((answer, i) => (
          <div
            key={i}
            className={`${indexAnswer === i
              ? answer.correct
                ? "bg-btnCorrect hover:bg-btnCorrect-hover"
                : "bg-btnIncorrect hover:bg-btnIncorrect-hover"
              : "bg-white"
              } rounded-lg p-2 px-4 w-full shadow-sm pulse`}
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
    </Card>
  );
}