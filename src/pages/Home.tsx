import { useState } from 'react'
import ModalHome from '../components/ModalHome'
import Button from '../components/Button'
import { ModalHomeProps } from '../components/ModalHome'

export default function Home(): JSX.Element {

  const [name, setName] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleStart = () => {
    setShowModal(true)
  }

  return (
    <div className='content'>
      <div className={`${showModal ? 'blur-sm' : ""}`}>
        <div className={`shadow-lg p-8 rounded-xl text-center
        bg-btnQuiz
        `}>
          <h1 className="md:text-8xl
          text-text-secondary
          ">QuizApp!</h1>
          <p>Test your knowledge</p>
          <Button event={handleStart}
            className="bg-btnQuiz-variant text-text-primary"
          >
            Start Quiz
          </Button>
        </div>

      </div>
      <ModalHome
        modalProps={{
          title: 'Enter Your Name',
          isOpen: showModal,
          onClose: () => setShowModal(false)
        }}
        inputValue={name}
        setInputValue={setName}
      />
    </div>
  )
}