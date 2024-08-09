import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModalHome from '../components/ModalHome'


export default function Home(): JSX.Element {

  const [name, setName] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleStart = () => {
    setShowModal(true)
  }

  return (
    <div className='content'>
      <div className={`${showModal ? 'blur-sm' : ""}`}>
        <div className={`shadow-lg p-8 rounded-xl text-center`}>
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

      </div>
      <h3>Name: {name}</h3>
      <ModalHome
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        inputValue={name}
        setInputValue={setName}
      />
    </div>
  )
}