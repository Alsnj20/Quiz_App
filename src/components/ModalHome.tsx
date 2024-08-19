import { useNavigate } from 'react-router-dom'
import { Modal, ModalProps } from './Modal'
import Button from './Button'

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
      <div className='py-4 flex justify-between items-center gap-2'>
        <Button className="w-1/2
      bg-btnCorrect text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      hover:bg-btnCorrect-hover
      "
          event={handleStartQuiz}
        >
          Start Quiz
        </Button>
        <Button className=" w-1/2
      bg-orange-400 text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      hover:bg-orange-500
      "
          event={modalProps.onClose}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )
}