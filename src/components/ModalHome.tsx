import { useState } from 'react'


interface Modal{
  isOpen: boolean
  onClose: () => void
  inputValue: string
  setInputValue: (value: string) => void
}

export default function ModalHome({ isOpen, onClose, inputValue, setInputValue }: Modal): JSX.Element {


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      {isOpen && (
        <div className={`showModal fixed inset-0 flex items-center justify-center bg-transparent w-full bg-red-300`}
        >
          <div className='bg-white p-8 rounded shadow w-[50%] flex flex-col gap-8'>
            <h2 className='text-4xl text-center'>Enter Your Name</h2>
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
                onClick={onClose}
              >
                Start Quiz
              </button>
              <button className=" w-1/3
      bg-orange-400 text-3xl text-white font-bold py-2 px-4 rounded-lg pulse
      hover:bg-orange-500
      "
                onClick={onClose}
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