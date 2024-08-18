
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { AnswerData } from './Quiz';
import Button from '../components/Button';

export default function Result(): JSX.Element {
  const navigate = useNavigate();
  const dataScore = useLocation().state.dataScore as AnswerData[];
  const user = localStorage.getItem('name');

  console.log(user);
  console.log(dataScore);

  const restartBtn = () => {
    localStorage.removeItem('name');
    navigate('/');
  }

  return (
    <Card color="bg-text-secondary">
      <h1 className="text-5xl font-semibold text-center text-text-tertiary">
        {user}'s Score
      </h1>
      <h2 className="text-5xl text-center font-semibold text-text-primary">
        Test Completed
      </h2>
      <div className="text-text-primary">
        <p>Answers</p>
        <div>
          {dataScore.map((data, index: number) => (
            <div key={index}>
              <p>
                Question {data.question + 1}: {data.isCorrect ? "Correct" : "Incorrect"}
              </p>
            </div>
          )
          )}
        </div>
      </div>
      <div>
        <p className="text-btnCorrect
        font-semibold
        " >Correct:
          <span> {dataScore.filter((data) => data.isCorrect).length}</span>
        </p>
        <p className="text-btnIncorrect
          font-semibold"
        >Incorrect:
          <span> {dataScore.filter((data) => !data.isCorrect).length}</span>
        </p>
      </div>
      <div className="grid place-content-center">
        <Button className="bg-btnQuiz-variant text-text-primary w-max"
          event={restartBtn}
        >
          Restart
        </Button>
      </div>

    </Card>
  );
}