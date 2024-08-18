import { useNavigate } from 'react-router-dom'
import { Modal, ModalProps } from './Modal'

export interface ModalHomeProps {
  modalProps: ModalProps
  inputValue: string
  setInputValue: (value: string) => void
}

export default function ModalHome(
  { modalProps, inputValue, setInputValue }: ModalHomeProps
): JSX.Element {
  const navigate = useNavigate()

  const handleStartQuiz = () => {
    localStorage.setItem('name', inputValue);
    modalProps.onClose()
    navigate('/quiz')
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Modal {...modalProps}>
      <input
        type='text'
        placeholder='Enter Your Name'
        value={inputValue}
        onChange={handleInputChange}
        className='border p-2 rounded w-full text-2xl'
      />
      <div className='flex justify-evenly items-center flex-wrap gap-4'>
        <button className="w-1/3
      bg-btnCorrect text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      hover:bg-btnCorrect-hover
      "
          onClick={handleStartQuiz}
          onKeyDown={
            (e) => {
              if (e.key === 'Enter') {
                handleStartQuiz()
              }
            }
          }
        >
          Start Quiz
        </button>
        <button className=" w-1/3
      bg-orange-400 text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      hover:bg-orange-500
      "
          onClick={modalProps.onClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  )
}