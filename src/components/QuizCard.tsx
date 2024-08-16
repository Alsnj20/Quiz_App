import Button from "./Button";

interface QuizCardProps {
  index: number;
  question: {
    question: string;
    answers: {
      text: string;
      correct: boolean;
    }[];
  };
}

export default function QuizCard({ index, question }: QuizCardProps): JSX.Element {
  return (
    <div className="cardQuiz
    shadow-lg bg-card
    before:bg-card
    before:shadow-md
    flex flex-col gap-2
    p-4 md:p-20
    ">
      <h4 className="text-4xl font-semibold text-center
      text-text-tertiary
      ">Question {index}</h4>
      <h2 className="text-5xl text-center font-semibold">{question.question}</h2>
      <p>Select one:</p>
      <div className="flex flex-col
      justify-center items-center
      gap-4">
        {question.answers.map((answer, index) => (

          <div key={index}
            className="bg-white rounded-lg p-2 px-4 w-full
            shadow-sm pulse
            "
          >
            <p>{answer.text}</p>
          </div>)
        )}
        <Button className="bg-btnQuiz-variant text-text-primary w-max
        
        ">Next</Button>
      </div>
    </div>
  )
}