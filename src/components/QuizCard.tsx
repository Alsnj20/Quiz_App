
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
    <div className="bg-card">
      <h3>Question {index}</h3>
      <h2>{question.question}</h2>
      <p>Select one:</p>
      <div>
        {question.answers.map((answer, index) => (
          <div key={index}>
            <p>{answer.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}