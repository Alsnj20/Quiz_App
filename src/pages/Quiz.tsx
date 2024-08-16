import Button from "../components/Button";
import Clock from "../components/Clock";
import { useNavigate } from "react-router-dom";

import questions from "../questions";
import QuizCard from "../components/QuizCard";
import ArrowRight from "../components/ArrowRight";

export default function Quiz(): JSX.Element {
  const navigate = useNavigate()

  const prevBtn = () => {
    localStorage.removeItem('name')
    navigate('/')
  }


  return (
    <div className="content flex flex-col p-4 md:p-8">
      <header className="flex justify-between items-center">
        <Button className="flex 
        justify-between items-center
        gap-4    
        bg-btnQuiz-variant text-text-secondary
" event={prevBtn}>
          <ArrowRight width="30" />
          Back
        </Button>
        <Clock />
      </header>
      <div className="m-4 flex justify-center items-center">
        <div className="w-[70vw] md:w-1/2">
          {questions.map((question, index) => (
            <QuizCard
              key={index + 1}
              question={question}
              index={index + 1}
            />
          ))
          }
        </div>
      </div>
    </div>
  )
}