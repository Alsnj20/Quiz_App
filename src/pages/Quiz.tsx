import Clock from "../components/Clock";
import { useNavigate } from "react-router-dom";


export default function Quiz(): JSX.Element {
  const navigate = useNavigate()

  const prevBtn = () => {
    navigate('/')
  }


  return (
    <div className="bg-card w-[70vw] h-auto text-center rounded-2xl">
      <div>
        <div className="flex justify-between items-center p-4">
          <button className="bg-btnQuiz p-3 rounded-xl w-[10%]"
          onClick={prevBtn}
          >
            <i className='bx bx-left-arrow-alt text-3xl'></i>
          </button>
          <p>Question 1</p>
          <Clock />
        </div>
        <p className="font-bold">What is the capital of France?</p>
        <button>Paris</button>
        <button>London</button>
        <button>Berlin</button>
        <h2>{localStorage.getItem('name')}</h2>
      </div>
    </div>
  )
}