import { useState } from 'react'
import ModalHome from '../components/ModalHome'
import Button from '../components/Button'


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
          <Button event={handleStart}>
            Start Quiz
          </Button>
        </div>

      </div>
      <ModalHome
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        inputValue={name}
        setInputValue={setName}
      />
    </div>
  )
}