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
}

export default function QuizCard({ index, question, nextQuestion }: QuizCardProps): JSX.Element {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const checkAnswer = (answerCorrect: boolean, answerIndex: number) => {
    setSelectedAnswerIndex(answerIndex);
    setIsAnswered(true);
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
            className={`rounded-lg p-2 px-4 w-full shadow-sm pulse ${isAnswered
                ? i === selectedAnswerIndex
                  ? answer.correct
                    ? 'bg-btnCorrect'
                    : 'bg-btnIncorrect'
                  : 'bg-white'
                : 'bg-white'
              }`}
            onClick={() => !isAnswered && checkAnswer(answer.correct, i)}
          >
            <p>{answer.text}</p>
          </div>
        ))}
        <Button className="bg-btnQuiz-variant text-text-primary w-max" event={nextQuestion}>
          Next
        </Button>
      </div>
    </div>
  );
}