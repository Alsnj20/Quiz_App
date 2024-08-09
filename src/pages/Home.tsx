import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home(): JSX.Element {

  const [name, setName] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [stateHome, setStateHome] = useState(false)

  const handleStart = () => {
    setShowModal(true)
  }

  return (
    <div>
      <div className="shadow-lg p-8 rounded-xl text-center" >
        <h1 className="text-8xl">QuizApp!</h1>
        <p>Test your knowledge</p>
        <button className="
      bg-btnQuiz text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      "
          onClick={handleStart}
        >
          Start Quiz
        </button>
      </div>


      {showModal && (
        <div className='showModal fixed inset-0 flex items-center justify-center bg-transparent w-full bg-red-300'>
          <div className='bg-white p-8 rounded shadow w-[50%] flex flex-col gap-8'>
            <h2 className='text-4xl text-center'>Enter Your Name</h2>
            <input
              type='text'
              placeholder='Enter Your Name'
              value={name}
              onChange={e => setName(e.target.value)}
              className='border p-2 rounded w-full text-2xl'
            />
            <div className='flex justify-evenly items-center flex-wrap gap-4'>
              <button className="w-1/3
      bg-btnCorrect text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      hover:bg-btnCorrect-hover
      "
                onClick={handleStart}
              >
                Start Quiz
              </button>
              <button className=" w-1/3
      bg-orange-400 text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      hover:bg-orange-500
      "
                onClick={handleStart}
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}